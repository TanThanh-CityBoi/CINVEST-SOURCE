// Original file: src/proto/proto/cooperation.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Cooperation as _cooperations_Cooperation, Cooperation__Output as _cooperations_Cooperation__Output } from '../cooperations/Cooperation';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _cooperations_GetListResponse, GetListResponse__Output as _cooperations_GetListResponse__Output } from '../cooperations/GetListResponse';
import type { GetOneResponse as _cooperations_GetOneResponse, GetOneResponse__Output as _cooperations_GetOneResponse__Output } from '../cooperations/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryCooperation as _cooperations_QueryCooperation, QueryCooperation__Output as _cooperations_QueryCooperation__Output } from '../cooperations/QueryCooperation';

export interface CooperationServiceClient extends grpc.Client {
  create(argument: _cooperations_Cooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _cooperations_Cooperation, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _cooperations_QueryCooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _cooperations_QueryCooperation, callback: grpc.requestCallback<_cooperations_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _cooperations_Cooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, metadata: grpc.Metadata, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, options: grpc.CallOptions, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _cooperations_Cooperation, callback: grpc.requestCallback<_cooperations_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CooperationServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_cooperations_Cooperation__Output, _cooperations_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _cooperations_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_cooperations_QueryCooperation__Output, _cooperations_GetListResponse>;
  
  update: grpc.handleUnaryCall<_cooperations_Cooperation__Output, _cooperations_GetOneResponse>;
  
}

export interface CooperationServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_cooperations_Cooperation, _cooperations_GetOneResponse, _cooperations_Cooperation__Output, _cooperations_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _cooperations_GetOneResponse, _bases_Id__Output, _cooperations_GetOneResponse__Output>
  getList: MethodDefinition<_cooperations_QueryCooperation, _cooperations_GetListResponse, _cooperations_QueryCooperation__Output, _cooperations_GetListResponse__Output>
  update: MethodDefinition<_cooperations_Cooperation, _cooperations_GetOneResponse, _cooperations_Cooperation__Output, _cooperations_GetOneResponse__Output>
}
