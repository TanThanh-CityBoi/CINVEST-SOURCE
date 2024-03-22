// Original file: src/proto/proto/profileInvestLocationMapping.proto

import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';

export interface ProfileInvestLocationMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'countryId'?: (number);
  'profile'?: (_profiles_Profile | null);
  'country'?: (_countries_Country | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_profileId'?: "profileId";
  '_countryId'?: "countryId";
  '_profile'?: "profile";
  '_country'?: "country";
}

export interface ProfileInvestLocationMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'countryId'?: (number);
  'profile'?: (_profiles_Profile__Output | null);
  'country'?: (_countries_Country__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_profileId': "profileId";
  '_countryId': "countryId";
  '_profile': "profile";
  '_country': "country";
}
