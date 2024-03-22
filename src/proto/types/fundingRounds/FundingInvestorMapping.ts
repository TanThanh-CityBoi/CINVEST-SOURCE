// Original file: src/proto/proto/fundingInvestorMapping.proto

import type { FundingRound as _fundingRounds_FundingRound, FundingRound__Output as _fundingRounds_FundingRound__Output } from '../fundingRounds/FundingRound';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface FundingInvestorMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'fundingRoundId'?: (number);
  'orgId'?: (number);
  'indId'?: (number);
  'leadId'?: (number);
  'amount'?: (number | string);
  'startDate'?: (string);
  'endDate'?: (string);
  'fundingRound'?: (_fundingRounds_FundingRound | null);
  'organization'?: (_companies_Company | null);
  'individual'?: (_profiles_Profile | null);
  'leadInvestor'?: (_profiles_Profile | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_fundingRoundId'?: "fundingRoundId";
  '_orgId'?: "orgId";
  '_indId'?: "indId";
  '_leadId'?: "leadId";
  '_amount'?: "amount";
  '_startDate'?: "startDate";
  '_endDate'?: "endDate";
  '_fundingRound'?: "fundingRound";
  '_organization'?: "organization";
  '_individual'?: "individual";
  '_leadInvestor'?: "leadInvestor";
}

export interface FundingInvestorMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'fundingRoundId'?: (number);
  'orgId'?: (number);
  'indId'?: (number);
  'leadId'?: (number);
  'amount'?: (number);
  'startDate'?: (string);
  'endDate'?: (string);
  'fundingRound'?: (_fundingRounds_FundingRound__Output | null);
  'organization'?: (_companies_Company__Output | null);
  'individual'?: (_profiles_Profile__Output | null);
  'leadInvestor'?: (_profiles_Profile__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_fundingRoundId': "fundingRoundId";
  '_orgId': "orgId";
  '_indId': "indId";
  '_leadId': "leadId";
  '_amount': "amount";
  '_startDate': "startDate";
  '_endDate': "endDate";
  '_fundingRound': "fundingRound";
  '_organization': "organization";
  '_individual': "individual";
  '_leadInvestor': "leadInvestor";
}
