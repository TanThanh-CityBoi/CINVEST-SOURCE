import { EntityManager } from 'typeorm';

import { StateEnum } from '../../common/enums/enums';
import {
  grpcErrorBadRequest,
  grpcErrorNotFound
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { ConnectionEntity } from './entities/connection.entity';
import { TConnection, TQueryConnection } from './types';
export class ConnectionService extends BaseAbstractService<ConnectionEntity> {
  constructor() {
    super(ConnectionEntity);
  }

  private readonly entityManager = connection.createEntityManager();
  async getList(query: TQueryConnection) {
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

  async create(dto: TConnection, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction((trx) => {
        return trx.save(
          trx.create(ConnectionEntity, { ...dto, state: StateEnum.PENDING }),
        );
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(id: number, dto: TConnection, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: ConnectionEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(ConnectionEntity, { ...dto }));
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

  async acceptConnection(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    try {
      return await this.repository.save({ ...data, state: StateEnum.APPROVED });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }
}
