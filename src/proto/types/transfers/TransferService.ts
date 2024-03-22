// Original file: src/proto/proto/transfer.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _transfers_GetListResponse, GetListResponse__Output as _transfers_GetListResponse__Output } from '../transfers/GetListResponse';
import type { GetOneResponse as _transfers_GetOneResponse, GetOneResponse__Output as _transfers_GetOneResponse__Output } from '../transfers/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryTransfer as _transfers_QueryTransfer, QueryTransfer__Output as _transfers_QueryTransfer__Output } from '../transfers/QueryTransfer';
import type { Transfer as _transfers_Transfer, Transfer__Output as _transfers_Transfer__Output } from '../transfers/Transfer';

export interface TransferServiceClient extends grpc.Client {
  create(argument: _transfers_Transfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _transfers_Transfer, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _transfers_QueryTransfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _transfers_QueryTransfer, callback: grpc.requestCallback<_transfers_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _transfers_Transfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, metadata: grpc.Metadata, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, options: grpc.CallOptions, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _transfers_Transfer, callback: grpc.requestCallback<_transfers_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TransferServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_transfers_Transfer__Output, _transfers_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _transfers_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_transfers_QueryTransfer__Output, _transfers_GetListResponse>;
  
  update: grpc.handleUnaryCall<_transfers_Transfer__Output, _transfers_GetOneResponse>;
  
}

export interface TransferServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_transfers_Transfer, _transfers_GetOneResponse, _transfers_Transfer__Output, _transfers_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _transfers_GetOneResponse, _bases_Id__Output, _transfers_GetOneResponse__Output>
  getList: MethodDefinition<_transfers_QueryTransfer, _transfers_GetListResponse, _transfers_QueryTransfer__Output, _transfers_GetListResponse__Output>
  update: MethodDefinition<_transfers_Transfer, _transfers_GetOneResponse, _transfers_Transfer__Output, _transfers_GetOneResponse__Output>
}
