import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TService extends TBaseAbstract {
  name?: string;
  description?: string;
  logo?: string;
  companyId?: number;
  industryId?: number;
  thumb?: string;
}

export interface TQueryService extends TPagination {
  name?: string;
  description?: string;
  logo?: string;
  companyId?: number;
  industryId?: number;
  thumb?: string;
}
