// Original file: src/proto/proto/organizationRecord.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface OrganizationRecord {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'companyId'?: (number);
  'user'?: (_users_User | null);
  'company'?: (_companies_Company | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_userId'?: "userId";
  '_companyId'?: "companyId";
  '_user'?: "user";
  '_company'?: "company";
}

export interface OrganizationRecord__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'companyId'?: (number);
  'user'?: (_users_User__Output | null);
  'company'?: (_companies_Company__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_userId': "userId";
  '_companyId': "companyId";
  '_user': "user";
  '_company': "company";
}
