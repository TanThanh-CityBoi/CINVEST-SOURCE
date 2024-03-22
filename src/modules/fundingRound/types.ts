import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { FundingRoundEnum, InvestmentTypeEnum } from '../../common/enums/enums';
import { TFileEntity } from '../files/types';
import { TRecentNew } from '../recentNews/types';

export interface TFundingInvestorMapping extends TBaseAbstract {
  fundingRoundId?: number;
  orgId?: number;
  indId?: number;
  leadId?: number;
  amount?: number;
  startDate?: Date;
  endDate?: Date;
}
export interface TFundingRound extends TBaseAbstract {
  investeeId?: number;
  announcedDate?: Date;
  round?: FundingRoundEnum;
  type?: InvestmentTypeEnum;
  preMoney?: number;
  moneyRaised?: number;
  description?: string;
  investors?: TFundingInvestorMapping[];
  documents?: TFileEntity[];
  recentNews?: TRecentNew[];
}

export interface TQueryFundingRound extends TPagination {
  investeeId?: number;
  announcedDate?: Date;
  round?: FundingRoundEnum;
  type?: InvestmentTypeEnum;
  preMoney?: number;
  moneyRaised?: number;
  description?: string;
}
