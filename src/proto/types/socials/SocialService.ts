// Original file: src/proto/proto/social.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _socials_GetListResponse, GetListResponse__Output as _socials_GetListResponse__Output } from '../socials/GetListResponse';
import type { GetOneResponse as _socials_GetOneResponse, GetOneResponse__Output as _socials_GetOneResponse__Output } from '../socials/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QuerySocial as _socials_QuerySocial, QuerySocial__Output as _socials_QuerySocial__Output } from '../socials/QuerySocial';
import type { Social as _socials_Social, Social__Output as _socials_Social__Output } from '../socials/Social';

export interface SocialServiceClient extends grpc.Client {
  create(argument: _socials_Social, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _socials_Social, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _socials_QuerySocial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _socials_QuerySocial, callback: grpc.requestCallback<_socials_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _socials_Social, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, metadata: grpc.Metadata, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, options: grpc.CallOptions, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _socials_Social, callback: grpc.requestCallback<_socials_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SocialServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_socials_Social__Output, _socials_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _socials_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_socials_QuerySocial__Output, _socials_GetListResponse>;
  
  update: grpc.handleUnaryCall<_socials_Social__Output, _socials_GetOneResponse>;
  
}

export interface SocialServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_socials_Social, _socials_GetOneResponse, _socials_Social__Output, _socials_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _socials_GetOneResponse, _bases_Id__Output, _socials_GetOneResponse__Output>
  getList: MethodDefinition<_socials_QuerySocial, _socials_GetListResponse, _socials_QuerySocial__Output, _socials_GetListResponse__Output>
  update: MethodDefinition<_socials_Social, _socials_GetOneResponse, _socials_Social__Output, _socials_GetOneResponse__Output>
}
