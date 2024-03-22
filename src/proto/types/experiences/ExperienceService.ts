// Original file: src/proto/proto/experience.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { Experience as _experiences_Experience, Experience__Output as _experiences_Experience__Output } from '../experiences/Experience';
import type { GetListResponse as _experiences_GetListResponse, GetListResponse__Output as _experiences_GetListResponse__Output } from '../experiences/GetListResponse';
import type { GetOneResponse as _experiences_GetOneResponse, GetOneResponse__Output as _experiences_GetOneResponse__Output } from '../experiences/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryExperience as _experiences_QueryExperience, QueryExperience__Output as _experiences_QueryExperience__Output } from '../experiences/QueryExperience';

export interface ExperienceServiceClient extends grpc.Client {
  create(argument: _experiences_Experience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _experiences_Experience, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _experiences_QueryExperience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _experiences_QueryExperience, callback: grpc.requestCallback<_experiences_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _experiences_Experience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, metadata: grpc.Metadata, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, options: grpc.CallOptions, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _experiences_Experience, callback: grpc.requestCallback<_experiences_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ExperienceServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_experiences_Experience__Output, _experiences_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _experiences_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_experiences_QueryExperience__Output, _experiences_GetListResponse>;
  
  update: grpc.handleUnaryCall<_experiences_Experience__Output, _experiences_GetOneResponse>;
  
}

export interface ExperienceServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_experiences_Experience, _experiences_GetOneResponse, _experiences_Experience__Output, _experiences_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _experiences_GetOneResponse, _bases_Id__Output, _experiences_GetOneResponse__Output>
  getList: MethodDefinition<_experiences_QueryExperience, _experiences_GetListResponse, _experiences_QueryExperience__Output, _experiences_GetListResponse__Output>
  update: MethodDefinition<_experiences_Experience, _experiences_GetOneResponse, _experiences_Experience__Output, _experiences_GetOneResponse__Output>
}
