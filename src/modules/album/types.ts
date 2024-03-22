import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { TFileEntity } from '../files/types';

export interface TQueryAlbum extends TPagination {
  name?: string;
  profileId?: number;
  companyId?: number;
}
export interface TAlbum extends TBaseAbstract {
  name?: string;
  images?: TFileEntity[];
  profileId?: number;
  companyId?: number;
}
