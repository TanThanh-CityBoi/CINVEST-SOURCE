import { FindOptionsRelations } from 'typeorm';

import { FundingRoundEntity } from './entities/fundingRound.entity';

export const fundingRelations: FindOptionsRelations<FundingRoundEntity> = {
  investee: true,
  documents: true,
  investors: {
    organization: true,
    individual: true,
    leadInvestor: true,
  },
  recentNews: true,
};

export const fundingListRelations: FindOptionsRelations<FundingRoundEntity> = {
  investee: {
    industries: {
      industry: true,
    },
    headquarterPlace: true,
  },
  investors: true,
};
