// Original file: src/proto/proto/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _services_GetListResponse, GetListResponse__Output as _services_GetListResponse__Output } from '../services/GetListResponse';
import type { GetOneResponse as _services_GetOneResponse, GetOneResponse__Output as _services_GetOneResponse__Output } from '../services/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryService as _services_QueryService, QueryService__Output as _services_QueryService__Output } from '../services/QueryService';
import type { Service as _services_Service, Service__Output as _services_Service__Output } from '../services/Service';

export interface ServiceServiceClient extends grpc.Client {
  create(argument: _services_Service, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _services_Service, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _services_QueryService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _services_QueryService, callback: grpc.requestCallback<_services_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _services_Service, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _services_Service, callback: grpc.requestCallback<_services_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ServiceServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_services_Service__Output, _services_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _services_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_services_QueryService__Output, _services_GetListResponse>;
  
  update: grpc.handleUnaryCall<_services_Service__Output, _services_GetOneResponse>;
  
}

export interface ServiceServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_services_Service, _services_GetOneResponse, _services_Service__Output, _services_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _services_GetOneResponse, _bases_Id__Output, _services_GetOneResponse__Output>
  getList: MethodDefinition<_services_QueryService, _services_GetListResponse, _services_QueryService__Output, _services_GetListResponse__Output>
  update: MethodDefinition<_services_Service, _services_GetOneResponse, _services_Service__Output, _services_GetOneResponse__Output>
}
