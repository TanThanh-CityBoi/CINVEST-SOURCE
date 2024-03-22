// Original file: src/proto/proto/product.proto

import type { Product as _products_Product, Product__Output as _products_Product__Output } from '../products/Product';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_products_Product | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_products_Product__Output | null);
  '_data': "data";
}
