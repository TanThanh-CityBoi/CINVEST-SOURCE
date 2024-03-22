// Original file: src/proto/proto/companyCooperationMapping.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface CompanyCooperationMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'cooperationId'?: (number);
  'description'?: (string);
  'date'?: (string);
  'company'?: (_companies_Company | null);
  'cooperation'?: (_companies_Company | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_companyId'?: "companyId";
  '_cooperationId'?: "cooperationId";
  '_description'?: "description";
  '_date'?: "date";
  '_company'?: "company";
  '_cooperation'?: "cooperation";
}

export interface CompanyCooperationMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'cooperationId'?: (number);
  'description'?: (string);
  'date'?: (string);
  'company'?: (_companies_Company__Output | null);
  'cooperation'?: (_companies_Company__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_companyId': "companyId";
  '_cooperationId': "cooperationId";
  '_description': "description";
  '_date': "date";
  '_company': "company";
  '_cooperation': "cooperation";
}
