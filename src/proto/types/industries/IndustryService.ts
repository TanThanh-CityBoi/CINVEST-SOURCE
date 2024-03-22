// Original file: src/proto/proto/industry.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _industries_GetListResponse, GetListResponse__Output as _industries_GetListResponse__Output } from '../industries/GetListResponse';
import type { GetOneResponse as _industries_GetOneResponse, GetOneResponse__Output as _industries_GetOneResponse__Output } from '../industries/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { Industry as _industries_Industry, Industry__Output as _industries_Industry__Output } from '../industries/Industry';
import type { QueryIndustry as _industries_QueryIndustry, QueryIndustry__Output as _industries_QueryIndustry__Output } from '../industries/QueryIndustry';

export interface IndustryServiceClient extends grpc.Client {
  create(argument: _industries_Industry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _industries_Industry, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _industries_QueryIndustry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _industries_QueryIndustry, callback: grpc.requestCallback<_industries_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _industries_Industry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, metadata: grpc.Metadata, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, options: grpc.CallOptions, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _industries_Industry, callback: grpc.requestCallback<_industries_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface IndustryServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_industries_Industry__Output, _industries_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _industries_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_industries_QueryIndustry__Output, _industries_GetListResponse>;
  
  update: grpc.handleUnaryCall<_industries_Industry__Output, _industries_GetOneResponse>;
  
}

export interface IndustryServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_industries_Industry, _industries_GetOneResponse, _industries_Industry__Output, _industries_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _industries_GetOneResponse, _bases_Id__Output, _industries_GetOneResponse__Output>
  getList: MethodDefinition<_industries_QueryIndustry, _industries_GetListResponse, _industries_QueryIndustry__Output, _industries_GetListResponse__Output>
  update: MethodDefinition<_industries_Industry, _industries_GetOneResponse, _industries_Industry__Output, _industries_GetOneResponse__Output>
}
