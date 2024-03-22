import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

// sync_app
export interface TArea extends TBaseAbstract {
  name?: string;
  mainArea?: string;
}
export interface TQueryArea extends TArea, TPagination {}
