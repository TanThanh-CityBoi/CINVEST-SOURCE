// Original file: src/proto/proto/connection.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Connection as _connections_Connection, Connection__Output as _connections_Connection__Output } from '../connections/Connection';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _connections_GetListResponse, GetListResponse__Output as _connections_GetListResponse__Output } from '../connections/GetListResponse';
import type { GetOneResponse as _connections_GetOneResponse, GetOneResponse__Output as _connections_GetOneResponse__Output } from '../connections/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryConnection as _connections_QueryConnection, QueryConnection__Output as _connections_QueryConnection__Output } from '../connections/QueryConnection';

export interface ConnectionServiceClient extends grpc.Client {
  acceptConnection(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  acceptConnection(argument: _bases_Id, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  create(argument: _connections_Connection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _connections_Connection, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _connections_QueryConnection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _connections_QueryConnection, callback: grpc.requestCallback<_connections_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _connections_Connection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, metadata: grpc.Metadata, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, options: grpc.CallOptions, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _connections_Connection, callback: grpc.requestCallback<_connections_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ConnectionServiceHandlers extends grpc.UntypedServiceImplementation {
  acceptConnection: grpc.handleUnaryCall<_bases_Id__Output, _connections_GetOneResponse>;
  
  create: grpc.handleUnaryCall<_connections_Connection__Output, _connections_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _connections_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_connections_QueryConnection__Output, _connections_GetListResponse>;
  
  update: grpc.handleUnaryCall<_connections_Connection__Output, _connections_GetOneResponse>;
  
}

export interface ConnectionServiceDefinition extends grpc.ServiceDefinition {
  acceptConnection: MethodDefinition<_bases_Id, _connections_GetOneResponse, _bases_Id__Output, _connections_GetOneResponse__Output>
  create: MethodDefinition<_connections_Connection, _connections_GetOneResponse, _connections_Connection__Output, _connections_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _connections_GetOneResponse, _bases_Id__Output, _connections_GetOneResponse__Output>
  getList: MethodDefinition<_connections_QueryConnection, _connections_GetListResponse, _connections_QueryConnection__Output, _connections_GetListResponse__Output>
  update: MethodDefinition<_connections_Connection, _connections_GetOneResponse, _connections_Connection__Output, _connections_GetOneResponse__Output>
}
