import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TProduct extends TBaseAbstract {
  name?: string;
  description?: string;
  companyId?: number;
  typeId?: number;
  logo?: string;
  thumb?: string;
}
export interface TQueryProduct extends TPagination {
  name?: string;
  description?: string;
  companyId?: number;
  typeId?: number;
  logo?: string;
  thumb?: string;
}
