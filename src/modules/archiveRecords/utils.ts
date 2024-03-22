import { FindOptionsRelations } from 'typeorm';
import { FundingRoundRecordEntity } from '../user/entities/funding-round-record.entity';
import { IndividualRecordEntity } from '../user/entities/individual-record.entity';
import { OrganizationRecordEntity } from '../user/entities/organization-record.entity';

export const relationsInd: FindOptionsRelations<IndividualRecordEntity> = {
  profile: {
    experiences: {
      jobTitle: true,
      organization: true,
    },
    skills: {
      skill: true,
    },
    city: {
      country: true,
    },
    niches: {
      industry: true,
    },
    investLocations: {
      country: true,
    },
    investedFundingRounds: {
      fundingRound: {
        investee: true,
      },
      organization: true,
      leadInvestor: true,
    },
    user: true,
  },
};
export const relationsOrg: FindOptionsRelations<OrganizationRecordEntity> = {
  company: {
    hashtags: true,
    industries: {
      industry: true,
    },
    fundingRounds: true,
    investLocations: {
      country: true,
    },
    niches: {
      industry: true,
    },
    investedFundingRounds: {
      fundingRound: {
        investee: true,
      },
      organization: true,
      leadInvestor: true,
    },
    headquarterPlace: {
      country: true,
    },
  },
};

export const relationsFnd: FindOptionsRelations<FundingRoundRecordEntity> = {
  fundingRound: {
    investee: {
      industries: {
        industry: true,
      },
      headquarterPlace: true,
    },
    investors: true,
  },
};
