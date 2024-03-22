// Original file: src/proto/proto/company.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_companies_Company | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_companies_Company__Output | null);
  '_data': "data";
}
