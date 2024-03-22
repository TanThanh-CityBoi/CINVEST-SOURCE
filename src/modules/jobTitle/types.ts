import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TJobTitle extends TBaseAbstract {
  name?: string;
  isBoard?: boolean;
}

export interface TQueryJobTitle extends TPagination {
  name?: string;
  isBoard?: boolean;
}
