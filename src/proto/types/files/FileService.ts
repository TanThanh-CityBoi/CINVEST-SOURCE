// Original file: src/proto/proto/file.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';
import type { GetListResponse as _files_GetListResponse, GetListResponse__Output as _files_GetListResponse__Output } from '../files/GetListResponse';
import type { GetOneResponse as _files_GetOneResponse, GetOneResponse__Output as _files_GetOneResponse__Output } from '../files/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryFile as _files_QueryFile, QueryFile__Output as _files_QueryFile__Output } from '../files/QueryFile';

export interface FileServiceClient extends grpc.Client {
  create(argument: _files_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _files_File, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _files_QueryFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _files_QueryFile, callback: grpc.requestCallback<_files_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _files_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, options: grpc.CallOptions, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _files_File, callback: grpc.requestCallback<_files_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface FileServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_files_File__Output, _files_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _files_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_files_QueryFile__Output, _files_GetListResponse>;
  
  update: grpc.handleUnaryCall<_files_File__Output, _files_GetOneResponse>;
  
}

export interface FileServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_files_File, _files_GetOneResponse, _files_File__Output, _files_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _files_GetOneResponse, _bases_Id__Output, _files_GetOneResponse__Output>
  getList: MethodDefinition<_files_QueryFile, _files_GetListResponse, _files_QueryFile__Output, _files_GetListResponse__Output>
  update: MethodDefinition<_files_File, _files_GetOneResponse, _files_File__Output, _files_GetOneResponse__Output>
}
