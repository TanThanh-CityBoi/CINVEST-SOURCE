import { EntityManager } from 'typeorm';

import { StateEnum } from '../../common/enums/enums';
import {
  grpcErrorBadRequest,
  grpcErrorNotFound
} from '../../common/grpcError/errors';
import { clientHashTagGRPC } from '../../config/grpc.config';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { CampaignEntity } from './entities/campaign.entity';
import { HashtagCampaignEntity } from './entities/hashtag-campaign.entity';
import { TCampaign, THashtagCreateRequest, TQueryCampaign } from './types';
import {
  generateNumberCode,
  generatePrefixCode,
  relations,
  relationsForList
} from './utils';

export class CampaignService extends BaseAbstractService<CampaignEntity> {
  constructor() {
    super(CampaignEntity);
  }

  private readonly entityManager = connection.createEntityManager();

  async getList(query: TQueryCampaign) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    try {
      const data = await this.repository.findAndCount({
        relations: { ...relationsForList },
        where: { ...conditions },
        skip,
        take: limit,
        order: {
          [sortBy]: sortOrder,
        },
      });

      await Promise.all(
        data?.[0]?.map(async (campaign) => {
          const ids = campaign?.hashtags?.map((e) => e.hashtagId) || [];
          if (ids.length > 0) {
            const dataHashtag: any = await this.queryListHashtag(ids);
            campaign.hashtags = dataHashtag || [];
          }
        }) || [],
      );

      return {
        data: data[0],
        totalItems: data[1],
        perPage: limit,
        page: query?.page,
        totalPages: Math.ceil(data[1] / limit),
      };
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }

  async getById(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      relations: { ...relations },
    });

    if (data?.hashtags) {
      const ids = data?.hashtags?.map((e) => e.hashtagId) || [];
      const dataHashtag: any = await this.queryListHashtag(ids);
      data.hashtags = dataHashtag || [];
    }

    if (!data) throw new grpcErrorNotFound();

    return data;
  }

  async create(dto: TCampaign, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction(async (entityManager) => {
        if (dto.hashtags) {
          const hashtagsEntity = await this.createHashTag(dto.hashtags);
          dto.hashtags = hashtagsEntity as THashtagCreateRequest[];
        }

        const campaign = await entityManager.save(
          entityManager.create(CampaignEntity, { ...dto }),
        );
        await this.generateCodeForCampaign(campaign, entityManager);

        return campaign;
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async generateCodeForCampaign(campaign: CampaignEntity, trx: EntityManager) {
    const prefixCode = generatePrefixCode(campaign.category);
    const numberCode = generateNumberCode(campaign.id);
    campaign.code = `${prefixCode}${numberCode}`;

    return trx.save(campaign);
  }

  async update(id: number, dto: TCampaign, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: CampaignEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(CampaignEntity, { ...dto }));
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    return await this.repository.delete(data.id);
  }

  async acceptCampaign(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    try {
      return await this.repository.save({ ...data, state: StateEnum.APPROVED });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  public async queryListHashtag(ids: number[]) {
    if (ids.length === 0) return [];

    return await new Promise((resolve, reject) => {
      clientHashTagGRPC.GetList(
        { ids },
        (error: Error, response: { data: THashtagCreateRequest }) => {
          if (error) {
            reject(error);

            return;
          }

          resolve(response.data);
        },
      );
    });
  }

  public async createHashTag(hashtags: THashtagCreateRequest[]) {
    return await Promise.all(
      hashtags?.map((hashtag) => {
        return new Promise((resolve, reject) => {
          clientHashTagGRPC.Create(
            hashtag,
            (error: Error, response: HashtagCampaignEntity) => {
              if (error) {
                reject(error);

                return;
              }

              resolve({
                hashtagId: response.id,
              });
            },
          );
        });
      }) || [],
    );
  }

  public async count(query: TQueryCampaign) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    return this.repository.count({
      where: {
        ...conditions,
      },
    });
  }
}
