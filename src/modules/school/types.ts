import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

// sync_app
export interface TSchool extends TBaseAbstract {
  name?: string;
  cityId?: number;
  countryId?: number;
}
export interface TQuerySchool extends TSchool, TPagination {}
