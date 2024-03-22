// Original file: src/proto/proto/city.proto

import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_cities_City)[];
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
  'data': (_cities_City__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
