// Original file: src/proto/proto/recentNew.proto

import type { Campaign as _campaigns_Campaign, Campaign__Output as _campaigns_Campaign__Output } from '../campaigns/Campaign';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface RecentNew {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'url'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign | null);
  'profileId'?: (number);
  'profile'?: (_profiles_Profile | null);
  'fundingRoundId'?: (number);
  'acquisitionId'?: (number);
  'companyId'?: (number);
  'company'?: (_companies_Company | null);
  'postId'?: (number);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_url'?: "url";
  '_campaignId'?: "campaignId";
  '_campaign'?: "campaign";
  '_profileId'?: "profileId";
  '_profile'?: "profile";
  '_fundingRoundId'?: "fundingRoundId";
  '_acquisitionId'?: "acquisitionId";
  '_companyId'?: "companyId";
  '_company'?: "company";
  '_postId'?: "postId";
}

export interface RecentNew__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'url'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign__Output | null);
  'profileId'?: (number);
  'profile'?: (_profiles_Profile__Output | null);
  'fundingRoundId'?: (number);
  'acquisitionId'?: (number);
  'companyId'?: (number);
  'company'?: (_companies_Company__Output | null);
  'postId'?: (number);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_url': "url";
  '_campaignId': "campaignId";
  '_campaign': "campaign";
  '_profileId': "profileId";
  '_profile': "profile";
  '_fundingRoundId': "fundingRoundId";
  '_acquisitionId': "acquisitionId";
  '_companyId': "companyId";
  '_company': "company";
  '_postId': "postId";
}
