// Original file: src/proto/proto/hashtags.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteHashTagResponse as _news_DeleteHashTagResponse, DeleteHashTagResponse__Output as _news_DeleteHashTagResponse__Output } from '../news/DeleteHashTagResponse';
import type { GetHashTagRequest as _news_GetHashTagRequest, GetHashTagRequest__Output as _news_GetHashTagRequest__Output } from '../news/GetHashTagRequest';
import type { HashTag as _news_HashTag, HashTag__Output as _news_HashTag__Output } from '../news/HashTag';
import type { IdRequest as _news_IdRequest, IdRequest__Output as _news_IdRequest__Output } from '../news/IdRequest';
import type { ListHashTag as _news_ListHashTag, ListHashTag__Output as _news_ListHashTag__Output } from '../news/ListHashTag';

export interface HashTagServiceGrpcClient extends grpc.Client {
  Create(argument: _news_HashTag, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Create(argument: _news_HashTag, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Create(argument: _news_HashTag, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Create(argument: _news_HashTag, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  create(argument: _news_HashTag, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  create(argument: _news_HashTag, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  create(argument: _news_HashTag, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  create(argument: _news_HashTag, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _news_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _news_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _news_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _news_IdRequest, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _news_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _news_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _news_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _news_IdRequest, callback: grpc.requestCallback<_news_DeleteHashTagResponse__Output>): grpc.ClientUnaryCall;
  
  GetById(argument: _news_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  GetById(argument: _news_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  GetById(argument: _news_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  GetById(argument: _news_IdRequest, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  getById(argument: _news_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  getById(argument: _news_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  getById(argument: _news_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  getById(argument: _news_IdRequest, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  
  GetList(argument: _news_GetHashTagRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  GetList(argument: _news_GetHashTagRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  GetList(argument: _news_GetHashTagRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  GetList(argument: _news_GetHashTagRequest, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  getList(argument: _news_GetHashTagRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  getList(argument: _news_GetHashTagRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  getList(argument: _news_GetHashTagRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  getList(argument: _news_GetHashTagRequest, callback: grpc.requestCallback<_news_ListHashTag__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _news_HashTag, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Update(argument: _news_HashTag, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Update(argument: _news_HashTag, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  Update(argument: _news_HashTag, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  update(argument: _news_HashTag, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  update(argument: _news_HashTag, metadata: grpc.Metadata, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  update(argument: _news_HashTag, options: grpc.CallOptions, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  update(argument: _news_HashTag, callback: grpc.requestCallback<_news_HashTag__Output>): grpc.ClientUnaryCall;
  
}

export interface HashTagServiceGrpcHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_news_HashTag__Output, _news_HashTag>;
  
  Delete: grpc.handleUnaryCall<_news_IdRequest__Output, _news_DeleteHashTagResponse>;
  
  GetById: grpc.handleUnaryCall<_news_IdRequest__Output, _news_HashTag>;
  
  GetList: grpc.handleUnaryCall<_news_GetHashTagRequest__Output, _news_ListHashTag>;
  
  Update: grpc.handleUnaryCall<_news_HashTag__Output, _news_HashTag>;
  
}

export interface HashTagServiceGrpcDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_news_HashTag, _news_HashTag, _news_HashTag__Output, _news_HashTag__Output>
  Delete: MethodDefinition<_news_IdRequest, _news_DeleteHashTagResponse, _news_IdRequest__Output, _news_DeleteHashTagResponse__Output>
  GetById: MethodDefinition<_news_IdRequest, _news_HashTag, _news_IdRequest__Output, _news_HashTag__Output>
  GetList: MethodDefinition<_news_GetHashTagRequest, _news_ListHashTag, _news_GetHashTagRequest__Output, _news_ListHashTag__Output>
  Update: MethodDefinition<_news_HashTag, _news_HashTag, _news_HashTag__Output, _news_HashTag__Output>
}
