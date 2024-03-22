// Original file: src/proto/proto/recentNew.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _recentNews_GetListResponse, GetListResponse__Output as _recentNews_GetListResponse__Output } from '../recentNews/GetListResponse';
import type { GetOneResponse as _recentNews_GetOneResponse, GetOneResponse__Output as _recentNews_GetOneResponse__Output } from '../recentNews/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryRecentNew as _recentNews_QueryRecentNew, QueryRecentNew__Output as _recentNews_QueryRecentNew__Output } from '../recentNews/QueryRecentNew';
import type { RecentNew as _recentNews_RecentNew, RecentNew__Output as _recentNews_RecentNew__Output } from '../recentNews/RecentNew';

export interface RecentNewServiceClient extends grpc.Client {
  create(argument: _recentNews_RecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _recentNews_RecentNew, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _recentNews_QueryRecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _recentNews_QueryRecentNew, callback: grpc.requestCallback<_recentNews_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _recentNews_RecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, metadata: grpc.Metadata, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, options: grpc.CallOptions, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _recentNews_RecentNew, callback: grpc.requestCallback<_recentNews_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RecentNewServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_recentNews_RecentNew__Output, _recentNews_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _recentNews_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_recentNews_QueryRecentNew__Output, _recentNews_GetListResponse>;
  
  update: grpc.handleUnaryCall<_recentNews_RecentNew__Output, _recentNews_GetOneResponse>;
  
}

export interface RecentNewServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_recentNews_RecentNew, _recentNews_GetOneResponse, _recentNews_RecentNew__Output, _recentNews_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _recentNews_GetOneResponse, _bases_Id__Output, _recentNews_GetOneResponse__Output>
  getList: MethodDefinition<_recentNews_QueryRecentNew, _recentNews_GetListResponse, _recentNews_QueryRecentNew__Output, _recentNews_GetListResponse__Output>
  update: MethodDefinition<_recentNews_RecentNew, _recentNews_GetOneResponse, _recentNews_RecentNew__Output, _recentNews_GetOneResponse__Output>
}
