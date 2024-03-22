// Original file: src/proto/proto/album.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Album as _albums_Album, Album__Output as _albums_Album__Output } from '../albums/Album';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _albums_GetListResponse, GetListResponse__Output as _albums_GetListResponse__Output } from '../albums/GetListResponse';
import type { GetOneResponse as _albums_GetOneResponse, GetOneResponse__Output as _albums_GetOneResponse__Output } from '../albums/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryAlbum as _albums_QueryAlbum, QueryAlbum__Output as _albums_QueryAlbum__Output } from '../albums/QueryAlbum';

export interface AlbumServiceClient extends grpc.Client {
  create(argument: _albums_Album, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _albums_Album, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _albums_QueryAlbum, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _albums_QueryAlbum, callback: grpc.requestCallback<_albums_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _albums_Album, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, metadata: grpc.Metadata, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, options: grpc.CallOptions, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _albums_Album, callback: grpc.requestCallback<_albums_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AlbumServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_albums_Album__Output, _albums_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _albums_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_albums_QueryAlbum__Output, _albums_GetListResponse>;
  
  update: grpc.handleUnaryCall<_albums_Album__Output, _albums_GetOneResponse>;
  
}

export interface AlbumServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_albums_Album, _albums_GetOneResponse, _albums_Album__Output, _albums_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _albums_GetOneResponse, _bases_Id__Output, _albums_GetOneResponse__Output>
  getList: MethodDefinition<_albums_QueryAlbum, _albums_GetListResponse, _albums_QueryAlbum__Output, _albums_GetListResponse__Output>
  update: MethodDefinition<_albums_Album, _albums_GetOneResponse, _albums_Album__Output, _albums_GetOneResponse__Output>
}
