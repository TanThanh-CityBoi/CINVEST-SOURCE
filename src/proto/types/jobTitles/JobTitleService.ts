// Original file: src/proto/proto/jobTitle.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _jobTitles_GetListResponse, GetListResponse__Output as _jobTitles_GetListResponse__Output } from '../jobTitles/GetListResponse';
import type { GetOneResponse as _jobTitles_GetOneResponse, GetOneResponse__Output as _jobTitles_GetOneResponse__Output } from '../jobTitles/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { JobTitle as _jobTitles_JobTitle, JobTitle__Output as _jobTitles_JobTitle__Output } from '../jobTitles/JobTitle';
import type { QueryJobTitle as _jobTitles_QueryJobTitle, QueryJobTitle__Output as _jobTitles_QueryJobTitle__Output } from '../jobTitles/QueryJobTitle';

export interface JobTitleServiceClient extends grpc.Client {
  create(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _jobTitles_JobTitle, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _jobTitles_QueryJobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _jobTitles_QueryJobTitle, callback: grpc.requestCallback<_jobTitles_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, metadata: grpc.Metadata, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, options: grpc.CallOptions, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _jobTitles_JobTitle, callback: grpc.requestCallback<_jobTitles_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface JobTitleServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_jobTitles_JobTitle__Output, _jobTitles_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _jobTitles_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_jobTitles_QueryJobTitle__Output, _jobTitles_GetListResponse>;
  
  update: grpc.handleUnaryCall<_jobTitles_JobTitle__Output, _jobTitles_GetOneResponse>;
  
}

export interface JobTitleServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_jobTitles_JobTitle, _jobTitles_GetOneResponse, _jobTitles_JobTitle__Output, _jobTitles_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _jobTitles_GetOneResponse, _bases_Id__Output, _jobTitles_GetOneResponse__Output>
  getList: MethodDefinition<_jobTitles_QueryJobTitle, _jobTitles_GetListResponse, _jobTitles_QueryJobTitle__Output, _jobTitles_GetListResponse__Output>
  update: MethodDefinition<_jobTitles_JobTitle, _jobTitles_GetOneResponse, _jobTitles_JobTitle__Output, _jobTitles_GetOneResponse__Output>
}
