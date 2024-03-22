// Original file: src/proto/proto/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _products_GetListResponse, GetListResponse__Output as _products_GetListResponse__Output } from '../products/GetListResponse';
import type { GetOneResponse as _products_GetOneResponse, GetOneResponse__Output as _products_GetOneResponse__Output } from '../products/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { Product as _products_Product, Product__Output as _products_Product__Output } from '../products/Product';
import type { QueryProduct as _products_QueryProduct, QueryProduct__Output as _products_QueryProduct__Output } from '../products/QueryProduct';

export interface ProductServiceClient extends grpc.Client {
  create(argument: _products_Product, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_Product, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _products_QueryProduct, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _products_QueryProduct, callback: grpc.requestCallback<_products_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _products_Product, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, options: grpc.CallOptions, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_Product, callback: grpc.requestCallback<_products_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_products_Product__Output, _products_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _products_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_products_QueryProduct__Output, _products_GetListResponse>;
  
  update: grpc.handleUnaryCall<_products_Product__Output, _products_GetOneResponse>;
  
}

export interface ProductServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_products_Product, _products_GetOneResponse, _products_Product__Output, _products_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _products_GetOneResponse, _bases_Id__Output, _products_GetOneResponse__Output>
  getList: MethodDefinition<_products_QueryProduct, _products_GetListResponse, _products_QueryProduct__Output, _products_GetListResponse__Output>
  update: MethodDefinition<_products_Product, _products_GetOneResponse, _products_Product__Output, _products_GetOneResponse__Output>
}
