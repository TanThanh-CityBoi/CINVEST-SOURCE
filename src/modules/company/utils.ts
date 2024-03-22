import { FindOptionsOrder, FindOptionsRelations } from 'typeorm';

import { CompanyEntity } from './entities/company.entity';

export const companyListRelations: FindOptionsRelations<CompanyEntity> = {
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
};

export const companyRelations: FindOptionsRelations<CompanyEntity> = {
  headquarterPlace: { country: true },
  managementPlace: { country: true },
  taxPlace: { country: true },
  industries: {
    industry: true,
  },
  user: true,
  transfers: true,
  exits: true,
  ipoStock: true,
  fundingRounds: {
    investors: {
      fundingRound: true,
      organization: true,
      individual: true,
      leadInvestor: true,
    },
  },
  founders: {
    founder: true,
  },
  directors: {
    director: true,
  },
  chiefs: {
    chief: true,
  },
  people: {
    jobTitle: true,
    profile: true,
  },
  albums: true,
  investedFundingRounds: {
    fundingRound: {
      investee: true,
    },
    organization: true,
    individual: true,
    leadInvestor: true,
  },
  acquisitions: {
    acqAcquirer: true,
    acqAcquiree: true,
  },
  soldAcquisitions: {
    acqAcquirer: true,
    acqAcquiree: true,
  },
  employees: {
    profile: true,
    jobTitle: true,
  },
  services: true,
  products: true,
  merges: true,
  soldMergers: true,
  cooperations: true,
  socials: true,
  hashtags: true,
  recentNews: true,
  investLocations: {
    country: true,
  },
  niches: {
    industry: true,
  },
};

export const order: FindOptionsOrder<CompanyEntity> = {
  industries: {
    createdAt: 'DESC',
  },
  transfers: {
    createdAt: 'DESC',
  },
  exits: {
    createdAt: 'DESC',
  },
  fundingRounds: {
    createdAt: 'DESC',
  },
  founders: {
    createdAt: 'DESC',
  },
  directors: {
    createdAt: 'DESC',
  },
  chiefs: {
    createdAt: 'DESC',
  },
  people: {
    createdAt: 'DESC',
  },
  albums: {
    createdAt: 'DESC',
  },
  investedFundingRounds: {
    createdAt: 'DESC',
  },
  acquisitions: {
    createdAt: 'DESC',
  },
  soldAcquisitions: {
    createdAt: 'DESC',
  },
  employees: {
    createdAt: 'DESC',
  },
  services: {
    createdAt: 'DESC',
  },
  products: {
    createdAt: 'DESC',
  },
  merges: {
    createdAt: 'DESC',
  },
  soldMergers: {
    createdAt: 'DESC',
  },
  cooperations: {
    createdAt: 'DESC',
  },
  socials: {
    createdAt: 'DESC',
  },
  hashtags: {
    createdAt: 'DESC',
  },
};
