import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TQuerySocial extends TPagination {
  url?: string;
  description?: string;
}

export interface TSocial extends TBaseAbstract {
  url?: string;
  description?: string;
}
