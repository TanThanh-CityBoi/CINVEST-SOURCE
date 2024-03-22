// Original file: src/proto/proto/companyChiefMapping.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface CompanyChiefMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'chiefId'?: (number);
  'company'?: (_companies_Company | null);
  'chief'?: (_profiles_Profile | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_companyId'?: "companyId";
  '_chiefId'?: "chiefId";
  '_company'?: "company";
  '_chief'?: "chief";
}

export interface CompanyChiefMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'chiefId'?: (number);
  'company'?: (_companies_Company__Output | null);
  'chief'?: (_profiles_Profile__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_companyId': "companyId";
  '_chiefId': "chiefId";
  '_company': "company";
  '_chief': "chief";
}
