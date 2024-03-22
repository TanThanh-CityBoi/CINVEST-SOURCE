// Original file: src/proto/proto/companyInvestLocationMapping.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';

export interface CompanyInvestLocationMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'countryId'?: (number);
  'company'?: (_companies_Company | null);
  'country'?: (_countries_Country | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_companyId'?: "companyId";
  '_countryId'?: "countryId";
  '_company'?: "company";
  '_country'?: "country";
}

export interface CompanyInvestLocationMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'countryId'?: (number);
  'company'?: (_companies_Company__Output | null);
  'country'?: (_countries_Country__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_companyId': "companyId";
  '_countryId': "countryId";
  '_company': "company";
  '_country': "country";
}
