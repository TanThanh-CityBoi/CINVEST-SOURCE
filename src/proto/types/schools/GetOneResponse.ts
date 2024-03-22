// Original file: src/proto/proto/school.proto

import type { School as _schools_School, School__Output as _schools_School__Output } from '../schools/School';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_schools_School | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_schools_School__Output | null);
  '_data': "data";
}
