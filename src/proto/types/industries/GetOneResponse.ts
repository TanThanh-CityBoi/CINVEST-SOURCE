// Original file: src/proto/proto/industry.proto

import type { Industry as _industries_Industry, Industry__Output as _industries_Industry__Output } from '../industries/Industry';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_industries_Industry | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_industries_Industry__Output | null);
  '_data': "data";
}
