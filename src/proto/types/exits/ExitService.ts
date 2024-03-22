// Original file: src/proto/proto/exit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { Exit as _exits_Exit, Exit__Output as _exits_Exit__Output } from '../exits/Exit';
import type { GetListResponse as _exits_GetListResponse, GetListResponse__Output as _exits_GetListResponse__Output } from '../exits/GetListResponse';
import type { GetOneResponse as _exits_GetOneResponse, GetOneResponse__Output as _exits_GetOneResponse__Output } from '../exits/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryExit as _exits_QueryExit, QueryExit__Output as _exits_QueryExit__Output } from '../exits/QueryExit';

export interface ExitServiceClient extends grpc.Client {
  create(argument: _exits_Exit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _exits_Exit, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _exits_QueryExit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _exits_QueryExit, callback: grpc.requestCallback<_exits_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _exits_Exit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, metadata: grpc.Metadata, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, options: grpc.CallOptions, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _exits_Exit, callback: grpc.requestCallback<_exits_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ExitServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_exits_Exit__Output, _exits_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _exits_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_exits_QueryExit__Output, _exits_GetListResponse>;
  
  update: grpc.handleUnaryCall<_exits_Exit__Output, _exits_GetOneResponse>;
  
}

export interface ExitServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_exits_Exit, _exits_GetOneResponse, _exits_Exit__Output, _exits_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _exits_GetOneResponse, _bases_Id__Output, _exits_GetOneResponse__Output>
  getList: MethodDefinition<_exits_QueryExit, _exits_GetListResponse, _exits_QueryExit__Output, _exits_GetListResponse__Output>
  update: MethodDefinition<_exits_Exit, _exits_GetOneResponse, _exits_Exit__Output, _exits_GetOneResponse__Output>
}
