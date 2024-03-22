import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { ProductMajor } from '../../common/enums/enums';

export interface TProductType extends TBaseAbstract {
  name?: string;
  code?: string;
  major?: ProductMajor;
}
export interface TQueryProductType extends TPagination {
  name?: string;
  code?: string;
  major?: ProductMajor;
}
