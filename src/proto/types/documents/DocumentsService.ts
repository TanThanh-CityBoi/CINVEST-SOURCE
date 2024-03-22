// Original file: src/proto/proto/documents.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { Document as _documents_Document, Document__Output as _documents_Document__Output } from '../documents/Document';
import type { GetListResponse as _documents_GetListResponse, GetListResponse__Output as _documents_GetListResponse__Output } from '../documents/GetListResponse';
import type { GetOneResponse as _documents_GetOneResponse, GetOneResponse__Output as _documents_GetOneResponse__Output } from '../documents/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryDocument as _documents_QueryDocument, QueryDocument__Output as _documents_QueryDocument__Output } from '../documents/QueryDocument';

export interface DocumentsServiceClient extends grpc.Client {
  create(argument: _documents_Document, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _documents_Document, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _documents_QueryDocument, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _documents_QueryDocument, callback: grpc.requestCallback<_documents_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _documents_Document, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, metadata: grpc.Metadata, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, options: grpc.CallOptions, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _documents_Document, callback: grpc.requestCallback<_documents_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DocumentsServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_documents_Document__Output, _documents_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _documents_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_documents_QueryDocument__Output, _documents_GetListResponse>;
  
  update: grpc.handleUnaryCall<_documents_Document__Output, _documents_GetOneResponse>;
  
}

export interface DocumentsServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_documents_Document, _documents_GetOneResponse, _documents_Document__Output, _documents_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _documents_GetOneResponse, _bases_Id__Output, _documents_GetOneResponse__Output>
  getList: MethodDefinition<_documents_QueryDocument, _documents_GetListResponse, _documents_QueryDocument__Output, _documents_GetListResponse__Output>
  update: MethodDefinition<_documents_Document, _documents_GetOneResponse, _documents_Document__Output, _documents_GetOneResponse__Output>
}
