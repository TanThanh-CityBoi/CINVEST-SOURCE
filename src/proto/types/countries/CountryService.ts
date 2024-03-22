// Original file: src/proto/proto/country.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _countries_GetListResponse, GetListResponse__Output as _countries_GetListResponse__Output } from '../countries/GetListResponse';
import type { GetOneResponse as _countries_GetOneResponse, GetOneResponse__Output as _countries_GetOneResponse__Output } from '../countries/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryCountry as _countries_QueryCountry, QueryCountry__Output as _countries_QueryCountry__Output } from '../countries/QueryCountry';

export interface CountryServiceClient extends grpc.Client {
  create(argument: _countries_Country, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _countries_Country, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _countries_QueryCountry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _countries_QueryCountry, callback: grpc.requestCallback<_countries_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _countries_Country, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, metadata: grpc.Metadata, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, options: grpc.CallOptions, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _countries_Country, callback: grpc.requestCallback<_countries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CountryServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_countries_Country__Output, _countries_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _countries_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_countries_QueryCountry__Output, _countries_GetListResponse>;
  
  update: grpc.handleUnaryCall<_countries_Country__Output, _countries_GetOneResponse>;
  
}

export interface CountryServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_countries_Country, _countries_GetOneResponse, _countries_Country__Output, _countries_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _countries_GetOneResponse, _bases_Id__Output, _countries_GetOneResponse__Output>
  getList: MethodDefinition<_countries_QueryCountry, _countries_GetListResponse, _countries_QueryCountry__Output, _countries_GetListResponse__Output>
  update: MethodDefinition<_countries_Country, _countries_GetOneResponse, _countries_Country__Output, _countries_GetOneResponse__Output>
}
