import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TIndustry extends TBaseAbstract {
  name?: string;
  level1?: string;
  level2?: number;
  level3?: number;
  level4?: number;
  level5?: number;
}

export interface TQueryIndustry extends TPagination {
  name?: string;
  level1?: string;
  level2?: number;
  level3?: number;
  level4?: number;
  level5?: number;
}
