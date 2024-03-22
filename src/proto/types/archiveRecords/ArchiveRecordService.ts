// Original file: src/proto/proto/archiveRecord.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetListResponse as _archiveRecords_GetListResponse, GetListResponse__Output as _archiveRecords_GetListResponse__Output } from '../archiveRecords/GetListResponse';
import type { QueryArchiveRecord as _archiveRecords_QueryArchiveRecord, QueryArchiveRecord__Output as _archiveRecords_QueryArchiveRecord__Output } from '../archiveRecords/QueryArchiveRecord';

export interface ArchiveRecordServiceClient extends grpc.Client {
  getList(argument: _archiveRecords_QueryArchiveRecord, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, metadata: grpc.Metadata, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, options: grpc.CallOptions, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, metadata: grpc.Metadata, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, options: grpc.CallOptions, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _archiveRecords_QueryArchiveRecord, callback: grpc.requestCallback<_archiveRecords_GetListResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ArchiveRecordServiceHandlers extends grpc.UntypedServiceImplementation {
  getList: grpc.handleUnaryCall<_archiveRecords_QueryArchiveRecord__Output, _archiveRecords_GetListResponse>;
  
}

export interface ArchiveRecordServiceDefinition extends grpc.ServiceDefinition {
  getList: MethodDefinition<_archiveRecords_QueryArchiveRecord, _archiveRecords_GetListResponse, _archiveRecords_QueryArchiveRecord__Output, _archiveRecords_GetListResponse__Output>
}
