// Original file: src/proto/proto/ipoStock.proto

import type { IpoStock as _ipoStocks_IpoStock, IpoStock__Output as _ipoStocks_IpoStock__Output } from '../ipoStocks/IpoStock';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_ipoStocks_IpoStock | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_ipoStocks_IpoStock__Output | null);
  '_data': "data";
}
