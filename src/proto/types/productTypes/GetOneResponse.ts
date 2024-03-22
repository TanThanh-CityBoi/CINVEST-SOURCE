// Original file: src/proto/proto/productType.proto

import type { ProductType as _productTypes_ProductType, ProductType__Output as _productTypes_ProductType__Output } from '../productTypes/ProductType';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_productTypes_ProductType | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_productTypes_ProductType__Output | null);
  '_data': "data";
}
