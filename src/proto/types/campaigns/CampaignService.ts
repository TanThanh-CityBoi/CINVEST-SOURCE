// Original file: src/proto/proto/campaign.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Campaign as _campaigns_Campaign, Campaign__Output as _campaigns_Campaign__Output } from '../campaigns/Campaign';
import type { CountResponse as _bases_CountResponse, CountResponse__Output as _bases_CountResponse__Output } from '../bases/CountResponse';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _campaigns_GetListResponse, GetListResponse__Output as _campaigns_GetListResponse__Output } from '../campaigns/GetListResponse';
import type { GetOneResponse as _campaigns_GetOneResponse, GetOneResponse__Output as _campaigns_GetOneResponse__Output } from '../campaigns/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryCampaign as _campaigns_QueryCampaign, QueryCampaign__Output as _campaigns_QueryCampaign__Output } from '../campaigns/QueryCampaign';

export interface CampaignServiceClient extends grpc.Client {
  count(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _campaigns_QueryCampaign, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  
  create(argument: _campaigns_Campaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _campaigns_Campaign, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _campaigns_QueryCampaign, callback: grpc.requestCallback<_campaigns_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _campaigns_Campaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, metadata: grpc.Metadata, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, options: grpc.CallOptions, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _campaigns_Campaign, callback: grpc.requestCallback<_campaigns_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CampaignServiceHandlers extends grpc.UntypedServiceImplementation {
  count: grpc.handleUnaryCall<_campaigns_QueryCampaign__Output, _bases_CountResponse>;
  
  create: grpc.handleUnaryCall<_campaigns_Campaign__Output, _campaigns_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _campaigns_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_campaigns_QueryCampaign__Output, _campaigns_GetListResponse>;
  
  update: grpc.handleUnaryCall<_campaigns_Campaign__Output, _campaigns_GetOneResponse>;
  
}

export interface CampaignServiceDefinition extends grpc.ServiceDefinition {
  count: MethodDefinition<_campaigns_QueryCampaign, _bases_CountResponse, _campaigns_QueryCampaign__Output, _bases_CountResponse__Output>
  create: MethodDefinition<_campaigns_Campaign, _campaigns_GetOneResponse, _campaigns_Campaign__Output, _campaigns_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _campaigns_GetOneResponse, _bases_Id__Output, _campaigns_GetOneResponse__Output>
  getList: MethodDefinition<_campaigns_QueryCampaign, _campaigns_GetListResponse, _campaigns_QueryCampaign__Output, _campaigns_GetListResponse__Output>
  update: MethodDefinition<_campaigns_Campaign, _campaigns_GetOneResponse, _campaigns_Campaign__Output, _campaigns_GetOneResponse__Output>
}
