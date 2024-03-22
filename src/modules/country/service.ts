import { EntityManager } from 'typeorm';

import {
  grpcErrorBadRequest,
  grpcErrorNotFound
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { CountryEntity } from './entities/country.entity';
import { TCountry, TQueryCountry } from './types';
import { relations } from './utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const countryCodes = require('country-codes-list');

export class CountryService extends BaseAbstractService<CountryEntity> {
  constructor() {
    super(CountryEntity);
  }

  private readonly entityManager = connection.createEntityManager();
  async getList(query: TQueryCountry) {
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
      relations: {
        ...relations,
      },
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async create(dto: TCountry, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(CountryEntity, { ...dto }));
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(id: number, dto: TCountry, em?: EntityManager) {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: CountryEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(CountryEntity, { ...dto }));
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
