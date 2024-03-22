import { EntityManager } from 'typeorm';

import {
    grpcErrorBadRequest,
    grpcErrorNotFound
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { EducationEntity } from './entities/education.entity';
import { TEducation, TQueryEducation } from './types';
import { relations } from './utils';

export class EducationService extends BaseAbstractService<EducationEntity> {
  constructor() {
    super(EducationEntity);
  }

  private readonly entityManager = connection.createEntityManager();
  async getList(query: TQueryEducation) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);

    const data = await this.repository.findAndCount({
      where: {
        ...conditions,
      },
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
  }

  async getById(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      relations: {
        ...relations,
      },
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async create(dto: TEducation, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(EducationEntity, { ...dto }));
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(id: number, dto: TEducation, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: EducationEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(EducationEntity, { ...dto }));
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
