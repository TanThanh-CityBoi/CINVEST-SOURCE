// Original file: src/proto/proto/merge.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _merges_GetListResponse, GetListResponse__Output as _merges_GetListResponse__Output } from '../merges/GetListResponse';
import type { GetOneResponse as _merges_GetOneResponse, GetOneResponse__Output as _merges_GetOneResponse__Output } from '../merges/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { Merge as _merges_Merge, Merge__Output as _merges_Merge__Output } from '../merges/Merge';
import type { QueryMerge as _merges_QueryMerge, QueryMerge__Output as _merges_QueryMerge__Output } from '../merges/QueryMerge';

export interface MergeServiceClient extends grpc.Client {
  create(argument: _merges_Merge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _merges_Merge, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _merges_QueryMerge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _merges_QueryMerge, callback: grpc.requestCallback<_merges_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _merges_Merge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, metadata: grpc.Metadata, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, options: grpc.CallOptions, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _merges_Merge, callback: grpc.requestCallback<_merges_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface MergeServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_merges_Merge__Output, _merges_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _merges_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_merges_QueryMerge__Output, _merges_GetListResponse>;
  
  update: grpc.handleUnaryCall<_merges_Merge__Output, _merges_GetOneResponse>;
  
}

export interface MergeServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_merges_Merge, _merges_GetOneResponse, _merges_Merge__Output, _merges_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _merges_GetOneResponse, _bases_Id__Output, _merges_GetOneResponse__Output>
  getList: MethodDefinition<_merges_QueryMerge, _merges_GetListResponse, _merges_QueryMerge__Output, _merges_GetListResponse__Output>
  update: MethodDefinition<_merges_Merge, _merges_GetOneResponse, _merges_Merge__Output, _merges_GetOneResponse__Output>
}
