// Original file: src/proto/proto/service.proto

import type { Industry as _industries_Industry, Industry__Output as _industries_Industry__Output } from '../industries/Industry';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';

export interface Service {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'description'?: (string);
  'logo'?: (string);
  'companyId'?: (number);
  'industry'?: (_industries_Industry | null);
  'company'?: (_companies_Company | null);
  'files'?: (_files_File)[];
  'thumb'?: (string);
  'industryId'?: (number);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_description'?: "description";
  '_logo'?: "logo";
  '_companyId'?: "companyId";
  '_industry'?: "industry";
  '_company'?: "company";
  '_thumb'?: "thumb";
  '_industryId'?: "industryId";
}

export interface Service__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'description'?: (string);
  'logo'?: (string);
  'companyId'?: (number);
  'industry'?: (_industries_Industry__Output | null);
  'company'?: (_companies_Company__Output | null);
  'files': (_files_File__Output)[];
  'thumb'?: (string);
  'industryId'?: (number);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_description': "description";
  '_logo': "logo";
  '_companyId': "companyId";
  '_industry': "industry";
  '_company': "company";
  '_thumb': "thumb";
  '_industryId': "industryId";
}
