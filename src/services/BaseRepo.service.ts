import { EntityTarget, ObjectLiteral, Repository, UpdateResult } from 'typeorm';

import { grpcErrorNotFound } from '../common/grpcError/errors';
import { connection } from '../config/ormconfig';
import { BaseService } from './Base.service';

export class BaseRepoService<T extends ObjectLiteral> extends BaseService {
  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    super();
    this.repository = connection.getRepository(entity);
  }

  async firstOrFail(conditions: any): Promise<T> {
    const item = await this.repository.findOne({
      where: conditions,
    });
    if (!item) {
      throw new grpcErrorNotFound();
    }
    return item;
  }

  async save(item: any): Promise<void> {
    await this.repository.save(item);
  }

  async increment(
    conditions: any,
    propertyPath: string,
    value: number | string,
  ): Promise<UpdateResult> {
    return await this.repository.increment(conditions, propertyPath, value);
  }

  async decrement(
    conditions: any,
    propertyPath: string,
    value: number | string,
  ): Promise<UpdateResult> {
    return await this.repository.decrement(conditions, propertyPath, value);
  }
}
