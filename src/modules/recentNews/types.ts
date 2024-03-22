import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TRecentNew extends TBaseAbstract {
  url?: string;
  campaignId?: number;
  profileId?: number;
  fundingRoundId?: number;
  acquisitionId?: number;
  companyId?: number;
  postId?: number;
}
export interface TQueryRecentNew extends TRecentNew, TPagination {}
