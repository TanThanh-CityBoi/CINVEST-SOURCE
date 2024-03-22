// Original file: src/proto/proto/product.proto

import type { ProductType as _productTypes_ProductType, ProductType__Output as _productTypes_ProductType__Output } from '../productTypes/ProductType';
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';

export interface Product {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'description'?: (string);
  'typeId'?: (number);
  'logo'?: (string);
  'companyId'?: (number);
  'type'?: (_productTypes_ProductType | null);
  'company'?: (_companies_Company | null);
  'documents'?: (_files_File)[];
  'thumb'?: (string);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_description'?: "description";
  '_typeId'?: "typeId";
  '_logo'?: "logo";
  '_companyId'?: "companyId";
  '_type'?: "type";
  '_company'?: "company";
  '_thumb'?: "thumb";
}

export interface Product__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'description'?: (string);
  'typeId'?: (number);
  'logo'?: (string);
  'companyId'?: (number);
  'type'?: (_productTypes_ProductType__Output | null);
  'company'?: (_companies_Company__Output | null);
  'documents': (_files_File__Output)[];
  'thumb'?: (string);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_description': "description";
  '_typeId': "typeId";
  '_logo': "logo";
  '_companyId': "companyId";
  '_type': "type";
  '_company': "company";
  '_thumb': "thumb";
}
