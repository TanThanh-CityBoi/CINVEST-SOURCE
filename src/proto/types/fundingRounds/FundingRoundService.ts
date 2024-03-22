// Original file: src/proto/proto/fundingRound.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteInvestorRequest as _fundingRounds_DeleteInvestorRequest, DeleteInvestorRequest__Output as _fundingRounds_DeleteInvestorRequest__Output } from '../fundingRounds/DeleteInvestorRequest';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { FundingRound as _fundingRounds_FundingRound, FundingRound__Output as _fundingRounds_FundingRound__Output } from '../fundingRounds/FundingRound';
import type { GetListResponse as _fundingRounds_GetListResponse, GetListResponse__Output as _fundingRounds_GetListResponse__Output } from '../fundingRounds/GetListResponse';
import type { GetOneResponse as _fundingRounds_GetOneResponse, GetOneResponse__Output as _fundingRounds_GetOneResponse__Output } from '../fundingRounds/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryFundingRound as _fundingRounds_QueryFundingRound, QueryFundingRound__Output as _fundingRounds_QueryFundingRound__Output } from '../fundingRounds/QueryFundingRound';

export interface FundingRoundServiceClient extends grpc.Client {
  create(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _fundingRounds_FundingRound, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  deleteInvestor(argument: _fundingRounds_DeleteInvestorRequest, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _fundingRounds_QueryFundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _fundingRounds_QueryFundingRound, callback: grpc.requestCallback<_fundingRounds_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, metadata: grpc.Metadata, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, options: grpc.CallOptions, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _fundingRounds_FundingRound, callback: grpc.requestCallback<_fundingRounds_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface FundingRoundServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_fundingRounds_FundingRound__Output, _fundingRounds_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  deleteInvestor: grpc.handleUnaryCall<_fundingRounds_DeleteInvestorRequest__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _fundingRounds_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_fundingRounds_QueryFundingRound__Output, _fundingRounds_GetListResponse>;
  
  update: grpc.handleUnaryCall<_fundingRounds_FundingRound__Output, _fundingRounds_GetOneResponse>;
  
}

export interface FundingRoundServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_fundingRounds_FundingRound, _fundingRounds_GetOneResponse, _fundingRounds_FundingRound__Output, _fundingRounds_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  deleteInvestor: MethodDefinition<_fundingRounds_DeleteInvestorRequest, _bases_DeleteResponse, _fundingRounds_DeleteInvestorRequest__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _fundingRounds_GetOneResponse, _bases_Id__Output, _fundingRounds_GetOneResponse__Output>
  getList: MethodDefinition<_fundingRounds_QueryFundingRound, _fundingRounds_GetListResponse, _fundingRounds_QueryFundingRound__Output, _fundingRounds_GetListResponse__Output>
  update: MethodDefinition<_fundingRounds_FundingRound, _fundingRounds_GetOneResponse, _fundingRounds_FundingRound__Output, _fundingRounds_GetOneResponse__Output>
}
