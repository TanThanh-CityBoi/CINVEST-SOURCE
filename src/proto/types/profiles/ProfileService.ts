// Original file: src/proto/proto/profile.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CountResponse as _bases_CountResponse, CountResponse__Output as _bases_CountResponse__Output } from '../bases/CountResponse';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _profiles_GetListResponse, GetListResponse__Output as _profiles_GetListResponse__Output } from '../profiles/GetListResponse';
import type { GetOneResponse as _profiles_GetOneResponse, GetOneResponse__Output as _profiles_GetOneResponse__Output } from '../profiles/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { QueryProfile as _profiles_QueryProfile, QueryProfile__Output as _profiles_QueryProfile__Output } from '../profiles/QueryProfile';

export interface ProfileServiceClient extends grpc.Client {
  count(argument: _profiles_QueryProfile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _profiles_QueryProfile, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  
  create(argument: _profiles_Profile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _profiles_Profile, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _profiles_QueryProfile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _profiles_QueryProfile, callback: grpc.requestCallback<_profiles_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _profiles_Profile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, metadata: grpc.Metadata, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, options: grpc.CallOptions, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _profiles_Profile, callback: grpc.requestCallback<_profiles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProfileServiceHandlers extends grpc.UntypedServiceImplementation {
  count: grpc.handleUnaryCall<_profiles_QueryProfile__Output, _bases_CountResponse>;
  
  create: grpc.handleUnaryCall<_profiles_Profile__Output, _profiles_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _profiles_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_profiles_QueryProfile__Output, _profiles_GetListResponse>;
  
  update: grpc.handleUnaryCall<_profiles_Profile__Output, _profiles_GetOneResponse>;
  
}

export interface ProfileServiceDefinition extends grpc.ServiceDefinition {
  count: MethodDefinition<_profiles_QueryProfile, _bases_CountResponse, _profiles_QueryProfile__Output, _bases_CountResponse__Output>
  create: MethodDefinition<_profiles_Profile, _profiles_GetOneResponse, _profiles_Profile__Output, _profiles_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _profiles_GetOneResponse, _bases_Id__Output, _profiles_GetOneResponse__Output>
  getList: MethodDefinition<_profiles_QueryProfile, _profiles_GetListResponse, _profiles_QueryProfile__Output, _profiles_GetListResponse__Output>
  update: MethodDefinition<_profiles_Profile, _profiles_GetOneResponse, _profiles_Profile__Output, _profiles_GetOneResponse__Output>
}
