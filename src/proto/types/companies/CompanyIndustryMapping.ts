// Original file: src/proto/proto/companyIndustryMapping.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Industry as _industries_Industry, Industry__Output as _industries_Industry__Output } from '../industries/Industry';

export interface CompanyIndustryMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'industryId'?: (number);
  'isMain'?: (boolean);
  'company'?: (_companies_Company | null);
  'industry'?: (_industries_Industry | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_companyId'?: "companyId";
  '_industryId'?: "industryId";
  '_isMain'?: "isMain";
  '_company'?: "company";
  '_industry'?: "industry";
}

export interface CompanyIndustryMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'industryId'?: (number);
  'isMain'?: (boolean);
  'company'?: (_companies_Company__Output | null);
  'industry'?: (_industries_Industry__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_companyId': "companyId";
  '_industryId': "industryId";
  '_isMain': "isMain";
  '_company': "company";
  '_industry': "industry";
}
