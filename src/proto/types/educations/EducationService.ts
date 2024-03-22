// Original file: src/proto/proto/education.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { Education as _educations_Education, Education__Output as _educations_Education__Output } from '../educations/Education';
import type { GetListResponse as _educations_GetListResponse, GetListResponse__Output as _educations_GetListResponse__Output } from '../educations/GetListResponse';
import type { GetOneResponse as _educations_GetOneResponse, GetOneResponse__Output as _educations_GetOneResponse__Output } from '../educations/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryEducation as _educations_QueryEducation, QueryEducation__Output as _educations_QueryEducation__Output } from '../educations/QueryEducation';

export interface EducationServiceClient extends grpc.Client {
  create(argument: _educations_Education, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _educations_Education, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _educations_QueryEducation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _educations_QueryEducation, callback: grpc.requestCallback<_educations_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _educations_Education, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, metadata: grpc.Metadata, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, options: grpc.CallOptions, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _educations_Education, callback: grpc.requestCallback<_educations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EducationServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_educations_Education__Output, _educations_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _educations_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_educations_QueryEducation__Output, _educations_GetListResponse>;
  
  update: grpc.handleUnaryCall<_educations_Education__Output, _educations_GetOneResponse>;
  
}

export interface EducationServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_educations_Education, _educations_GetOneResponse, _educations_Education__Output, _educations_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _educations_GetOneResponse, _bases_Id__Output, _educations_GetOneResponse__Output>
  getList: MethodDefinition<_educations_QueryEducation, _educations_GetListResponse, _educations_QueryEducation__Output, _educations_GetListResponse__Output>
  update: MethodDefinition<_educations_Education, _educations_GetOneResponse, _educations_Education__Output, _educations_GetOneResponse__Output>
}
