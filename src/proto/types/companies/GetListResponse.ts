// Original file: src/proto/proto/company.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_companies_Company)[];
  '_totalItems'?: "totalItems";
  '_perPage'?: "perPage";
  '_totalPages'?: "totalPages";
  '_page'?: "page";
}

export interface GetListResponse__Output {
  'message': (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data': (_companies_Company__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
