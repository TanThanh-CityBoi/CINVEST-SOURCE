import {
  EntityManager,
  EntityTarget,
  ObjectLiteral,
  Repository,
} from 'typeorm';

import { connection } from '../config/ormconfig';
import { TPaginationResult } from '../types';
import { BaseService } from './Base.service';

export abstract class BaseAbstractService<
  T extends ObjectLiteral,
> extends BaseService {
  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    super();

    this.repository = connection.getRepository(entity);
  }

  abstract getList(query: any): Promise<TPaginationResult<T>>;
  abstract getById(id: number): Promise<T>;
  abstract create(dto: any, em?: EntityManager): Promise<T>;
  abstract update(id: number, dto: any, em?: EntityManager): Promise<T>;
  abstract delete(id: number): Promise<any>;
}
