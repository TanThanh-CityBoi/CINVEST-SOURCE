import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TIpoStock extends TBaseAbstract {
  description?: string;
  stockSymbol?: string;
  ipoValue?: number;
  ipoSharePrice?: number;
  ipoDate?: Date;
  chartSource?: string;
  companyId?: number;
}
export interface TQueryIpoStock extends TPagination {
  description?: string;
  stockSymbol?: string;
  ipoValue?: number;
  ipoSharePrice?: number;
  ipoDate?: Date;
  chartSource?: string;
  companyId?: number;
}
