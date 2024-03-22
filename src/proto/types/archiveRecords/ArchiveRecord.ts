// Original file: src/proto/proto/archiveRecord.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { FundingRound as _fundingRounds_FundingRound, FundingRound__Output as _fundingRounds_FundingRound__Output } from '../fundingRounds/FundingRound';

export interface ArchiveRecord {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'profileId'?: (number);
  'companyId'?: (number);
  'fundingRoundId'?: (number);
  'user'?: (_users_User | null);
  'profile'?: (_profiles_Profile | null);
  'company'?: (_companies_Company | null);
  'fundingRound'?: (_fundingRounds_FundingRound | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_userId'?: "userId";
  '_profileId'?: "profileId";
  '_companyId'?: "companyId";
  '_fundingRoundId'?: "fundingRoundId";
  '_user'?: "user";
  '_profile'?: "profile";
  '_company'?: "company";
  '_fundingRound'?: "fundingRound";
}

export interface ArchiveRecord__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'profileId'?: (number);
  'companyId'?: (number);
  'fundingRoundId'?: (number);
  'user'?: (_users_User__Output | null);
  'profile'?: (_profiles_Profile__Output | null);
  'company'?: (_companies_Company__Output | null);
  'fundingRound'?: (_fundingRounds_FundingRound__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_userId': "userId";
  '_profileId': "profileId";
  '_companyId': "companyId";
  '_fundingRoundId': "fundingRoundId";
  '_user': "user";
  '_profile': "profile";
  '_company': "company";
  '_fundingRound': "fundingRound";
}
