// Original file: src/proto/proto/city.proto

import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_cities_City | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_cities_City__Output | null);
  '_data': "data";
}
