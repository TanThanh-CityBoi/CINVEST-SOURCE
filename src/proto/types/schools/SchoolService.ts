// Original file: src/proto/proto/school.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _schools_GetListResponse, GetListResponse__Output as _schools_GetListResponse__Output } from '../schools/GetListResponse';
import type { GetOneResponse as _schools_GetOneResponse, GetOneResponse__Output as _schools_GetOneResponse__Output } from '../schools/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QuerySchool as _schools_QuerySchool, QuerySchool__Output as _schools_QuerySchool__Output } from '../schools/QuerySchool';
import type { School as _schools_School, School__Output as _schools_School__Output } from '../schools/School';

export interface SchoolServiceClient extends grpc.Client {
  create(argument: _schools_School, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _schools_School, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _schools_QuerySchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _schools_QuerySchool, callback: grpc.requestCallback<_schools_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _schools_School, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, metadata: grpc.Metadata, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, options: grpc.CallOptions, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _schools_School, callback: grpc.requestCallback<_schools_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SchoolServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_schools_School__Output, _schools_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _schools_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_schools_QuerySchool__Output, _schools_GetListResponse>;
  
  update: grpc.handleUnaryCall<_schools_School__Output, _schools_GetOneResponse>;
  
}

export interface SchoolServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_schools_School, _schools_GetOneResponse, _schools_School__Output, _schools_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _schools_GetOneResponse, _bases_Id__Output, _schools_GetOneResponse__Output>
  getList: MethodDefinition<_schools_QuerySchool, _schools_GetListResponse, _schools_QuerySchool__Output, _schools_GetListResponse__Output>
  update: MethodDefinition<_schools_School, _schools_GetOneResponse, _schools_School__Output, _schools_GetOneResponse__Output>
}
