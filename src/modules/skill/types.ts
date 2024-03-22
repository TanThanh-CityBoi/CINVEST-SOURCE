import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TQuerySkill extends TPagination {
  name?: string;
}

export interface TSkill extends TBaseAbstract {
  name?: string;
}
