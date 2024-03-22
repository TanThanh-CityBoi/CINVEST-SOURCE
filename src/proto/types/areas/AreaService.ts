// Original file: src/proto/proto/area.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Area as _areas_Area, Area__Output as _areas_Area__Output } from '../areas/Area';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _areas_GetListResponse, GetListResponse__Output as _areas_GetListResponse__Output } from '../areas/GetListResponse';
import type { GetOneResponse as _areas_GetOneResponse, GetOneResponse__Output as _areas_GetOneResponse__Output } from '../areas/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryArea as _areas_QueryArea, QueryArea__Output as _areas_QueryArea__Output } from '../areas/QueryArea';

export interface AreaServiceClient extends grpc.Client {
  create(argument: _areas_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _areas_Area, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _areas_QueryArea, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _areas_QueryArea, callback: grpc.requestCallback<_areas_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _areas_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _areas_Area, callback: grpc.requestCallback<_areas_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AreaServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_areas_Area__Output, _areas_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _areas_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_areas_QueryArea__Output, _areas_GetListResponse>;
  
  update: grpc.handleUnaryCall<_areas_Area__Output, _areas_GetOneResponse>;
  
}

export interface AreaServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_areas_Area, _areas_GetOneResponse, _areas_Area__Output, _areas_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _areas_GetOneResponse, _bases_Id__Output, _areas_GetOneResponse__Output>
  getList: MethodDefinition<_areas_QueryArea, _areas_GetListResponse, _areas_QueryArea__Output, _areas_GetListResponse__Output>
  update: MethodDefinition<_areas_Area, _areas_GetOneResponse, _areas_Area__Output, _areas_GetOneResponse__Output>
}
