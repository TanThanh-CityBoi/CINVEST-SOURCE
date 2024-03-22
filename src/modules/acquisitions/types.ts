import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { TFileEntity } from '../files/types';
import { TRecentNew } from '../recentNews/types';

export interface TAcquisition extends TBaseAbstract {
  acquirerId?: number;
  acquireeId?: number;
  description?: string;
  announcedDate?: Date;
  endDate?: Date;
  value?: number;
  equity?: number;
  documents?: TFileEntity[];
  recentNews?: TRecentNew[];
}
export interface TQueryAcquisition extends TPagination {
  acquirerId?: number;
  acquireeId?: number;
  description?: string;
  announcedDate?: Date;
  endDate?: Date;
  value?: number;
  equity?: number;
}
