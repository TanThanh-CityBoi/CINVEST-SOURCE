import { DeepPartial, EntityManager } from 'typeorm';

import { grpcErrorNotFound } from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { throwCommonGrpcError } from '../../utils/error';
import { mutateQuery } from '../../utils/mutateQuery';
import {
  TCooperationCreateRequest,
  TCooperationDTO,
  TCooperationListRequest,
} from './types';
import { byIdrelations, listRelations } from './utils';
import { CompanyCooperationMappingEntity } from '../company/entities/c-cooperateion-mapping.entity';

export class CooperationService extends BaseAbstractService<CompanyCooperationMappingEntity> {
  constructor() {
    super(CompanyCooperationMappingEntity);
  }

  private readonly entityManager = connection.createEntityManager();

  async getList(query: TCooperationListRequest) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);

    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        relations: { ...listRelations },
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
    } catch (error) {
      throw throwCommonGrpcError(error);
    }
  }

  async getById(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      relations: { ...byIdrelations },
    });

    if (!data) throw new grpcErrorNotFound();

    return data;
  }

  async create(dto: TCooperationCreateRequest, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return await trx.transaction(async (entityManager) => {
        return await entityManager.save(
          entityManager.create(CompanyCooperationMappingEntity, { ...dto }),
        );
      });
    } catch (error) {
      throw throwCommonGrpcError(error);
    }
  }

  async update(id: number, dto: TCooperationDTO, _em?: EntityManager) {
    try {
      const data = await this.getById(id);
      const updateData: DeepPartial<CompanyCooperationMappingEntity> =
        Object.assign(data, dto);
      return await this.repository.save(updateData);
    } catch (error) {
      throw throwCommonGrpcError(error);
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    return await this.repository.delete(data.id);
  }
}
