import { EntityManager } from 'typeorm';

import {
  grpcErrorBadRequest,
  grpcErrorNotFound
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { ExperienceEntity } from './entities/experience.entity';
import { TExperience, TQueryExperience } from './types';
import { relations } from './utils';

export class ExperienceService extends BaseAbstractService<ExperienceEntity> {
  constructor() {
    super(ExperienceEntity);
  }

  private readonly entityManager = connection.createEntityManager();
  async getList(query: TQueryExperience) {
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
      relations,
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async create(dto: TExperience, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(ExperienceEntity, { ...dto }));
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(id: number, dto: TExperience, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    try {
      return trx.transaction(async (trx) => {
        return await trx.save(trx.create(ExperienceEntity, { ...dto }));
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
}
