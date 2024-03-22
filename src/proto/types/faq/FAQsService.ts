// Original file: src/proto/proto/faq.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { FAQ as _faq_FAQ, FAQ__Output as _faq_FAQ__Output } from '../faq/FAQ';
import type { GetListResponse as _faq_GetListResponse, GetListResponse__Output as _faq_GetListResponse__Output } from '../faq/GetListResponse';
import type { GetOneResponse as _faq_GetOneResponse, GetOneResponse__Output as _faq_GetOneResponse__Output } from '../faq/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryFAQ as _faq_QueryFAQ, QueryFAQ__Output as _faq_QueryFAQ__Output } from '../faq/QueryFAQ';

export interface FAQsServiceClient extends grpc.Client {
  create(argument: _faq_FAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _faq_FAQ, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _faq_QueryFAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _faq_QueryFAQ, callback: grpc.requestCallback<_faq_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _faq_FAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, metadata: grpc.Metadata, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, options: grpc.CallOptions, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _faq_FAQ, callback: grpc.requestCallback<_faq_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface FAQsServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_faq_FAQ__Output, _faq_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _faq_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_faq_QueryFAQ__Output, _faq_GetListResponse>;
  
  update: grpc.handleUnaryCall<_faq_FAQ__Output, _faq_GetOneResponse>;
  
}

export interface FAQsServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_faq_FAQ, _faq_GetOneResponse, _faq_FAQ__Output, _faq_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _faq_GetOneResponse, _bases_Id__Output, _faq_GetOneResponse__Output>
  getList: MethodDefinition<_faq_QueryFAQ, _faq_GetListResponse, _faq_QueryFAQ__Output, _faq_GetListResponse__Output>
  update: MethodDefinition<_faq_FAQ, _faq_GetOneResponse, _faq_FAQ__Output, _faq_GetOneResponse__Output>
}
