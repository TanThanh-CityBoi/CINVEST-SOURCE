import { EntityManager } from 'typeorm';

import {
  grpcErrorBadRequest,
  grpcErrorNotFound
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { FAQEntity } from './entities/faq.entity';
import { TFAQCreateRequest, TFAQDTO, TFAQRequest } from './types';

export class FAQService extends BaseAbstractService<FAQEntity> {
  constructor() {
    super(FAQEntity);
  }

  private readonly entityManager = connection.createEntityManager();

  async getList(query: TFAQRequest) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        skip,
        take: limit,
        order: {
          [sortBy]: sortOrder,
        },
      });

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
    });

    if (!data) throw new grpcErrorNotFound();

    return data;
  }

  async create(dto: TFAQCreateRequest, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction(async (entityManager) => {
        return await entityManager.save(
          entityManager.create(FAQEntity, { ...dto }),
        );
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(id: number, dto: TFAQDTO, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    const updateData: FAQEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(FAQEntity, { ...updateData }));
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    return await this.repository.delete(data.id);
  }
}
