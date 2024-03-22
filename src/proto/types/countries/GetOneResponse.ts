// Original file: src/proto/proto/country.proto

import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_countries_Country | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_countries_Country__Output | null);
  '_data': "data";
}
