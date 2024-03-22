// Original file: src/proto/proto/statistic.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetRequest as _statistic_GetRequest, GetRequest__Output as _statistic_GetRequest__Output } from '../statistic/GetRequest';
import type { GetResponse as _statistic_GetResponse, GetResponse__Output as _statistic_GetResponse__Output } from '../statistic/GetResponse';

export interface StatisticServiceClient extends grpc.Client {
  getList(argument: _statistic_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _statistic_GetRequest, callback: grpc.requestCallback<_statistic_GetResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface StatisticServiceHandlers extends grpc.UntypedServiceImplementation {
  getList: grpc.handleUnaryCall<_statistic_GetRequest__Output, _statistic_GetResponse>;
  
}

export interface StatisticServiceDefinition extends grpc.ServiceDefinition {
  getList: MethodDefinition<_statistic_GetRequest, _statistic_GetResponse, _statistic_GetRequest__Output, _statistic_GetResponse__Output>
}
