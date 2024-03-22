// Original file: src/proto/proto/city.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _cities_GetListResponse, GetListResponse__Output as _cities_GetListResponse__Output } from '../cities/GetListResponse';
import type { GetOneResponse as _cities_GetOneResponse, GetOneResponse__Output as _cities_GetOneResponse__Output } from '../cities/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryCity as _cities_QueryCity, QueryCity__Output as _cities_QueryCity__Output } from '../cities/QueryCity';

export interface CityServiceClient extends grpc.Client {
  create(argument: _cities_City, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cities_City, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _cities_QueryCity, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cities_QueryCity, callback: grpc.requestCallback<_cities_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _cities_City, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, metadata: grpc.Metadata, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, options: grpc.CallOptions, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cities_City, callback: grpc.requestCallback<_cities_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CityServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_cities_City__Output, _cities_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _cities_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_cities_QueryCity__Output, _cities_GetListResponse>;
  
  update: grpc.handleUnaryCall<_cities_City__Output, _cities_GetOneResponse>;
  
}

export interface CityServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_cities_City, _cities_GetOneResponse, _cities_City__Output, _cities_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _cities_GetOneResponse, _bases_Id__Output, _cities_GetOneResponse__Output>
  getList: MethodDefinition<_cities_QueryCity, _cities_GetListResponse, _cities_QueryCity__Output, _cities_GetListResponse__Output>
  update: MethodDefinition<_cities_City, _cities_GetOneResponse, _cities_City__Output, _cities_GetOneResponse__Output>
}
