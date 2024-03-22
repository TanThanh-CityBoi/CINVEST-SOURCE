import { EntityManager, In } from 'typeorm';

import {
  grpcErrorBadRequest,
  grpcErrorNotFound,
} from '../../common/grpcError/errors';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { CampaignService } from '../campaign/service';
import { THashtagCreateRequest } from '../campaign/types';
import { CompanyEntity } from './entities/company.entity';
import { TCompany, TQueryCompany } from './types';
import { companyListRelations, companyRelations, order } from './utils';

export class CompanyService extends BaseAbstractService<CompanyEntity> {
  private campaignService;
  constructor() {
    super(CompanyEntity);

    this.campaignService = new CampaignService();
  }

  async getList(query: TQueryCompany) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);

    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        relations: { ...companyListRelations },
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
            const dataHashtag: any =
              await this.campaignService.queryListHashtag(ids);
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
    let data = await this.repository.findOne({
      where: { id },
      relations: { ...companyRelations },
      order: { ...order },
    });
    if (!data) throw new grpcErrorNotFound();
    if (data?.hashtags) {
      const ids = data?.hashtags?.map((e) => e.hashtagId) || [];
      const dataHashtag: any = await this.campaignService.queryListHashtag(ids);
      data.hashtags = dataHashtag || [];
    }

    if (!data) throw new grpcErrorNotFound();

    if (data?.parentId) {
      data.parent = await this.repository.findOne({
        where: { id: data.parentId },
      });
    }

    if (data?.cooperations?.length > 0) {
      data = await this.getCooperations(data);
    }

    return data;
  }

  async getByUserId(id: number) {
    let data = await this.repository.findOne({
      where: { userId: id },
      relations: { ...companyRelations },
    });

    if (!data) throw new grpcErrorNotFound();

    if (data?.parentId) {
      data.parent = await this.repository.findOne({
        where: { id: data.parentId },
      });
    }

    if (data?.cooperations?.length > 0) {
      data = await this.getCooperations(data);
    }

    return data;
  }

  private async getCooperations(data: CompanyEntity) {
    const ids: Set<number> = new Set();
    data.cooperations.map((item) => ids.add(item.cooperationId));
    const companyList: CompanyEntity[] = await this.repository.find({
      where: {
        id: In([...ids]),
      },
    });
    data.cooperations = data.cooperations.map((item) => {
      item.cooperation =
        companyList.find((company) => company.id === item.cooperationId) ||
        null;

      return item;
    });

    return data;
  }

  async create(dto: TCompany, em?: EntityManager) {
    try {
      const hashtagsEntity = await this.campaignService.createHashTag(
        dto.hashtags || [],
      );

      dto.hashtags = hashtagsEntity as THashtagCreateRequest[];

      const data = await this.repository.create({
        ...dto,
        founders: dto?.founders,
        directors: dto?.directors,
        chiefs: dto?.chiefs,
        albums: dto?.albums,
        people: dto?.people,
        cooperations: dto?.cooperations,
        transfers: dto?.transfers,
        exits: dto?.exits,
        industries: dto?.industries,
        socials: dto?.socials,
        ipoStock: dto?.ipoStock,
        niches: dto?.niches,
        investLocations: dto?.investLocations,
      });
      return await this.repository.save(data);
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }

  async update(id: number, dto: TCompany, em?: EntityManager) {
    try {
      const data = await this.getById(id);
      if (!data) throw new grpcErrorNotFound();
      // const updateData: DeepPartial<CompanyEntity> = Object.assign(data, dto);
      return await this.repository.save({ ...dto });
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    return await this.repository.delete(data.id);
  }

  public async count(query: TQueryCompany) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    return this.repository.count({
      where: {
        ...conditions,
      },
    });
  }

  // private mutateDataCompanyById(data: CompanyEntity) {
  //   if (data.acquisitions.length > 0) return data;

  //   if (data.soldAcquisitions.length > 0) {
  //     data.acquisitions = data.soldAcquisitions;
  //   }

  //   if (data.newAcquiree.length > 0) {
  //     data.acquisitions = data.newAcquiree;
  //   }

  //   data.soldAcquisitions = [];
  //   data.newAcquiree = [];

  //   return data;
  // }
}
