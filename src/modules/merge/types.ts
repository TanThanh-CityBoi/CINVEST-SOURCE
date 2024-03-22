import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TMerge extends TBaseAbstract {
  acquirerId?: number;
  acquireeId?: number;
  description?: string;
  announcedDate?: Date;
  endDate?: Date;
  value?: number;
}
export interface TQueryMerge extends TPagination {
  acquirerId?: number;
  acquireeId?: number;
  description?: string;
  announcedDate?: Date;
  endDate?: Date;
  value?: number;
}
