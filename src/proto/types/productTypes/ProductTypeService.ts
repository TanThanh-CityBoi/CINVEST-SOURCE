// Original file: src/proto/proto/productType.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _productTypes_GetListResponse, GetListResponse__Output as _productTypes_GetListResponse__Output } from '../productTypes/GetListResponse';
import type { GetOneResponse as _productTypes_GetOneResponse, GetOneResponse__Output as _productTypes_GetOneResponse__Output } from '../productTypes/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { ProductType as _productTypes_ProductType, ProductType__Output as _productTypes_ProductType__Output } from '../productTypes/ProductType';
import type { QueryProductType as _productTypes_QueryProductType, QueryProductType__Output as _productTypes_QueryProductType__Output } from '../productTypes/QueryProductType';

export interface ProductTypeServiceClient extends grpc.Client {
  create(argument: _productTypes_ProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _productTypes_ProductType, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _productTypes_QueryProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _productTypes_QueryProductType, callback: grpc.requestCallback<_productTypes_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _productTypes_ProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, metadata: grpc.Metadata, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, options: grpc.CallOptions, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _productTypes_ProductType, callback: grpc.requestCallback<_productTypes_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductTypeServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_productTypes_ProductType__Output, _productTypes_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _productTypes_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_productTypes_QueryProductType__Output, _productTypes_GetListResponse>;
  
  update: grpc.handleUnaryCall<_productTypes_ProductType__Output, _productTypes_GetOneResponse>;
  
}

export interface ProductTypeServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_productTypes_ProductType, _productTypes_GetOneResponse, _productTypes_ProductType__Output, _productTypes_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _productTypes_GetOneResponse, _bases_Id__Output, _productTypes_GetOneResponse__Output>
  getList: MethodDefinition<_productTypes_QueryProductType, _productTypes_GetListResponse, _productTypes_QueryProductType__Output, _productTypes_GetListResponse__Output>
  update: MethodDefinition<_productTypes_ProductType, _productTypes_GetOneResponse, _productTypes_ProductType__Output, _productTypes_GetOneResponse__Output>
}
