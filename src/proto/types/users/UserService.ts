// Original file: src/proto/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _users_GetListResponse, GetListResponse__Output as _users_GetListResponse__Output } from '../users/GetListResponse';
import type { GetOneResponse as _users_GetOneResponse, GetOneResponse__Output as _users_GetOneResponse__Output } from '../users/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryUser as _users_QueryUser, QueryUser__Output as _users_QueryUser__Output } from '../users/QueryUser';
import type { Sub as _users_Sub, Sub__Output as _users_Sub__Output } from '../users/Sub';
import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';

export interface UserServiceClient extends grpc.Client {
  create(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_User, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  deleteBySub(argument: _users_Sub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteBySub(argument: _users_Sub, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getBySub(argument: _users_Sub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getBySub(argument: _users_Sub, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _users_QueryUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _users_QueryUser, callback: grpc.requestCallback<_users_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_User, callback: grpc.requestCallback<_users_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_users_User__Output, _users_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  deleteBySub: grpc.handleUnaryCall<_users_Sub__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _users_GetOneResponse>;
  
  getBySub: grpc.handleUnaryCall<_users_Sub__Output, _users_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_users_QueryUser__Output, _users_GetListResponse>;
  
  update: grpc.handleUnaryCall<_users_User__Output, _users_GetOneResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_users_User, _users_GetOneResponse, _users_User__Output, _users_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  deleteBySub: MethodDefinition<_users_Sub, _bases_DeleteResponse, _users_Sub__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _users_GetOneResponse, _bases_Id__Output, _users_GetOneResponse__Output>
  getBySub: MethodDefinition<_users_Sub, _users_GetOneResponse, _users_Sub__Output, _users_GetOneResponse__Output>
  getList: MethodDefinition<_users_QueryUser, _users_GetListResponse, _users_QueryUser__Output, _users_GetListResponse__Output>
  update: MethodDefinition<_users_User, _users_GetOneResponse, _users_User__Output, _users_GetOneResponse__Output>
}
