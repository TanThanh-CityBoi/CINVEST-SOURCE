import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
import { FundingRoundEnum, InvestmentTypeEnum } from '../../common/enums/enums';

export const investorMappingSchema = Joi.object({
  fundingRoundId: Joi.number().optional(),
  orgId: Joi.number().optional(),
  indId: Joi.number().optional(),
  leadId: Joi.number().optional(),
  amount: Joi.number().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
}).append(baseSchema);

export const fundingSchema = Joi.object({
  investeeId: Joi.number().optional(),
  announcedDate: Joi.date().optional(),
  round: Joi.string()
    .valid(
      FundingRoundEnum.ALL,
      FundingRoundEnum.A,
      FundingRoundEnum.B,
      FundingRoundEnum.C,
      FundingRoundEnum.PRESEED,
      FundingRoundEnum.SEED,
      FundingRoundEnum.PREIPO,
      FundingRoundEnum.IPO,
      FundingRoundEnum.POSTIPO,
    )
    .optional(),
  type: Joi.string()
    .valid(
      InvestmentTypeEnum.EQUITY,
      InvestmentTypeEnum.ACQUISITION,
      InvestmentTypeEnum.MA,
    )
    .optional(),
  preMoney: Joi.number().optional(),
  moneyRaised: Joi.number().optional(),
  description: Joi.string().optional(),
  investors: Joi.array().items(investorMappingSchema).optional(),
}).append(baseSchema);

export const queryFundingRoundSchema = fundingSchema.append(paginationSchema);
