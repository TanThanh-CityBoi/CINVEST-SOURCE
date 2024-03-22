// Original file: src/proto/proto/ipoStock.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface IpoStock {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'description'?: (string);
  'stockSymbol'?: (string);
  'ipoValue'?: (number | string);
  'ipoSharePrice'?: (number | string);
  'ipoDate'?: (string);
  'chartSource'?: (string);
  'companyId'?: (number);
  'company'?: (_companies_Company | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_description'?: "description";
  '_stockSymbol'?: "stockSymbol";
  '_ipoValue'?: "ipoValue";
  '_ipoSharePrice'?: "ipoSharePrice";
  '_ipoDate'?: "ipoDate";
  '_chartSource'?: "chartSource";
  '_companyId'?: "companyId";
  '_company'?: "company";
}

export interface IpoStock__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'description'?: (string);
  'stockSymbol'?: (string);
  'ipoValue'?: (number);
  'ipoSharePrice'?: (number);
  'ipoDate'?: (string);
  'chartSource'?: (string);
  'companyId'?: (number);
  'company'?: (_companies_Company__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_description': "description";
  '_stockSymbol': "stockSymbol";
  '_ipoValue': "ipoValue";
  '_ipoSharePrice': "ipoSharePrice";
  '_ipoDate': "ipoDate";
  '_chartSource': "chartSource";
  '_companyId': "companyId";
  '_company': "company";
}
