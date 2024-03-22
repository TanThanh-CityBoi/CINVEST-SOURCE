// Original file: src/proto/proto/merge.proto

import type { Merge as _merges_Merge, Merge__Output as _merges_Merge__Output } from '../merges/Merge';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_merges_Merge | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_merges_Merge__Output | null);
  '_data': "data";
}
