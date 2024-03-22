// Original file: src/proto/proto/ipoStock.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _ipoStocks_GetListResponse, GetListResponse__Output as _ipoStocks_GetListResponse__Output } from '../ipoStocks/GetListResponse';
import type { GetOneResponse as _ipoStocks_GetOneResponse, GetOneResponse__Output as _ipoStocks_GetOneResponse__Output } from '../ipoStocks/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { IpoStock as _ipoStocks_IpoStock, IpoStock__Output as _ipoStocks_IpoStock__Output } from '../ipoStocks/IpoStock';
import type { QueryIpoStock as _ipoStocks_QueryIpoStock, QueryIpoStock__Output as _ipoStocks_QueryIpoStock__Output } from '../ipoStocks/QueryIpoStock';

export interface IpoStockServiceClient extends grpc.Client {
  create(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _ipoStocks_IpoStock, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _ipoStocks_QueryIpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _ipoStocks_QueryIpoStock, callback: grpc.requestCallback<_ipoStocks_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, metadata: grpc.Metadata, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, options: grpc.CallOptions, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _ipoStocks_IpoStock, callback: grpc.requestCallback<_ipoStocks_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface IpoStockServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_ipoStocks_IpoStock__Output, _ipoStocks_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _ipoStocks_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_ipoStocks_QueryIpoStock__Output, _ipoStocks_GetListResponse>;
  
  update: grpc.handleUnaryCall<_ipoStocks_IpoStock__Output, _ipoStocks_GetOneResponse>;
  
}

export interface IpoStockServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_ipoStocks_IpoStock, _ipoStocks_GetOneResponse, _ipoStocks_IpoStock__Output, _ipoStocks_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _ipoStocks_GetOneResponse, _bases_Id__Output, _ipoStocks_GetOneResponse__Output>
  getList: MethodDefinition<_ipoStocks_QueryIpoStock, _ipoStocks_GetListResponse, _ipoStocks_QueryIpoStock__Output, _ipoStocks_GetListResponse__Output>
  update: MethodDefinition<_ipoStocks_IpoStock, _ipoStocks_GetOneResponse, _ipoStocks_IpoStock__Output, _ipoStocks_GetOneResponse__Output>
}
