import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';

import { connection } from '../config/ormconfig';
import { RouteConfig } from './types';
export class BaseController<T extends ObjectLiteral, S> {
  path: string;
  entity: EntityTarget<T>;
  repository: Repository<T>;
  service: S;

  protected constructor(path: string, EntityModel: EntityTarget<T>) {
    this.path = path;
    this.repository = connection.getRepository(EntityModel);
  }

  buildRoutes(): RouteConfig[] {
    return [];
  }
}
