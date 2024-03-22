// Original file: src/proto/proto/transfer.proto

import type { Transfer as _transfers_Transfer, Transfer__Output as _transfers_Transfer__Output } from '../transfers/Transfer';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_transfers_Transfer | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_transfers_Transfer__Output | null);
  '_data': "data";
}
