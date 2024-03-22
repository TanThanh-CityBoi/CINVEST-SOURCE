// Original file: src/proto/proto/acquisition.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Acquisition as _acquisitions_Acquisition, Acquisition__Output as _acquisitions_Acquisition__Output } from '../acquisitions/Acquisition';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _acquisitions_GetListResponse, GetListResponse__Output as _acquisitions_GetListResponse__Output } from '../acquisitions/GetListResponse';
import type { GetOneResponse as _acquisitions_GetOneResponse, GetOneResponse__Output as _acquisitions_GetOneResponse__Output } from '../acquisitions/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryAcquisition as _acquisitions_QueryAcquisition, QueryAcquisition__Output as _acquisitions_QueryAcquisition__Output } from '../acquisitions/QueryAcquisition';

export interface AcquisitionServiceClient extends grpc.Client {
  create(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _acquisitions_Acquisition, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _acquisitions_QueryAcquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _acquisitions_QueryAcquisition, callback: grpc.requestCallback<_acquisitions_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, metadata: grpc.Metadata, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, options: grpc.CallOptions, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _acquisitions_Acquisition, callback: grpc.requestCallback<_acquisitions_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AcquisitionServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_acquisitions_Acquisition__Output, _acquisitions_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _acquisitions_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_acquisitions_QueryAcquisition__Output, _acquisitions_GetListResponse>;
  
  update: grpc.handleUnaryCall<_acquisitions_Acquisition__Output, _acquisitions_GetOneResponse>;
  
}

export interface AcquisitionServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_acquisitions_Acquisition, _acquisitions_GetOneResponse, _acquisitions_Acquisition__Output, _acquisitions_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _acquisitions_GetOneResponse, _bases_Id__Output, _acquisitions_GetOneResponse__Output>
  getList: MethodDefinition<_acquisitions_QueryAcquisition, _acquisitions_GetListResponse, _acquisitions_QueryAcquisition__Output, _acquisitions_GetListResponse__Output>
  update: MethodDefinition<_acquisitions_Acquisition, _acquisitions_GetOneResponse, _acquisitions_Acquisition__Output, _acquisitions_GetOneResponse__Output>
}
