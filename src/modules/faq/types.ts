import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { FundingRoundEnum } from '../../common/enums/enums';
import { THashtagCreateRequest } from '../campaign/types';
import { TRecentNew } from '../recentNews/types';

export interface TFAQDTO extends TBaseAbstract {
  title?: string;
  description?: string;
  launchDate?: Date;
  endDate?: Date;
  minEquity?: number;
  minAmount?: number;
  valuationCap?: number;
  discount?: number;
  round?: FundingRoundEnum;
  pitchTitle?: string;
  pitchContent?: string;
  companyId?: number;
  recentNews?: TRecentNew[];
  hashtags?: THashtagCreateRequest[];
}

export interface TFAQCreateRequest extends TBaseAbstract {
  name?: string;
  hashtagId?: number;
  campaignId?: number;
}

export type TFAQRequest = TPagination;
