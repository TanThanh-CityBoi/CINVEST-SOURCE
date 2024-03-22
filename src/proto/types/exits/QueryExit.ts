// Original file: src/proto/proto/exit.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface QueryExit {
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
  'exitDate'?: (string);
  'companyId'?: (number);
  'profileId'?: (number);
  'company'?: (_companies_Company | null);
  'profile'?: (_profiles_Profile | null);
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
  '_exitDate'?: "exitDate";
  '_companyId'?: "companyId";
  '_profileId'?: "profileId";
  '_company'?: "company";
  '_profile'?: "profile";
}

export interface QueryExit__Output {
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
  'exitDate'?: (string);
  'companyId'?: (number);
  'profileId'?: (number);
  'company'?: (_companies_Company__Output | null);
  'profile'?: (_profiles_Profile__Output | null);
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
  '_exitDate': "exitDate";
  '_companyId': "companyId";
  '_profileId': "profileId";
  '_company': "company";
  '_profile': "profile";
}
