// Original file: src/proto/proto/profileNicheIndustryMapping.proto

import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Industry as _industries_Industry, Industry__Output as _industries_Industry__Output } from '../industries/Industry';

export interface ProfileNicheIndustryMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'industryId'?: (number);
  'profile'?: (_profiles_Profile | null);
  'industry'?: (_industries_Industry | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_profileId'?: "profileId";
  '_industryId'?: "industryId";
  '_profile'?: "profile";
  '_industry'?: "industry";
}

export interface ProfileNicheIndustryMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'industryId'?: (number);
  'profile'?: (_profiles_Profile__Output | null);
  'industry'?: (_industries_Industry__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_profileId': "profileId";
  '_industryId': "industryId";
  '_profile': "profile";
  '_industry': "industry";
}
