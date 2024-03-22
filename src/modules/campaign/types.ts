import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { FundingRoundEnum } from '../../common/enums/enums';
import { TRecentNew } from '../recentNews/types';
import {
  CAMPAIGN_CATEGORY_ENUMS,
  CAMPAIGN_TYPE_ENUMS
} from './enums/campaign.enums';

export interface TCampaign extends TBaseAbstract {
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
  type?: CAMPAIGN_TYPE_ENUMS;
  category?: CAMPAIGN_CATEGORY_ENUMS;
}

export interface THashtagCreateRequest extends TBaseAbstract {
  name?: string;
  hashtagId?: number;
  campaignId?: number;
}

export interface TQueryCampaign extends TCampaign, TPagination {
  ids?: number[];
}
