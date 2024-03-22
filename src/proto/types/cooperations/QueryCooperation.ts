// Original file: src/proto/proto/cooperation.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface QueryCooperation {
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
  'cooperationId'?: (number);
  'description'?: (string);
  'date'?: (string);
  'cooperation'?: (_companies_Company | null);
  'isCustomer'?: (boolean);
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
  '_cooperationId'?: "cooperationId";
  '_description'?: "description";
  '_date'?: "date";
  '_cooperation'?: "cooperation";
  '_isCustomer'?: "isCustomer";
}

export interface QueryCooperation__Output {
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
  'cooperationId'?: (number);
  'description'?: (string);
  'date'?: (string);
  'cooperation'?: (_companies_Company__Output | null);
  'isCustomer'?: (boolean);
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
  '_cooperationId': "cooperationId";
  '_description': "description";
  '_date': "date";
  '_cooperation': "cooperation";
  '_isCustomer': "isCustomer";
}
