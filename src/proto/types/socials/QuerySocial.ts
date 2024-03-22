// Original file: src/proto/proto/social.proto

import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface QuerySocial {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sortBy'?: (string);
  'sortOrder'?: (string);
  'url'?: (string);
  'description'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'profile'?: (_profiles_Profile | null);
  'company'?: (_companies_Company | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_page'?: "page";
  '_limit'?: "limit";
  '_sortBy'?: "sortBy";
  '_sortOrder'?: "sortOrder";
  '_url'?: "url";
  '_description'?: "description";
  '_profileId'?: "profileId";
  '_companyId'?: "companyId";
  '_profile'?: "profile";
  '_company'?: "company";
}

export interface QuerySocial__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sortBy'?: (string);
  'sortOrder'?: (string);
  'url'?: (string);
  'description'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'profile'?: (_profiles_Profile__Output | null);
  'company'?: (_companies_Company__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_page': "page";
  '_limit': "limit";
  '_sortBy': "sortBy";
  '_sortOrder': "sortOrder";
  '_url': "url";
  '_description': "description";
  '_profileId': "profileId";
  '_companyId': "companyId";
  '_profile': "profile";
  '_company': "company";
}
