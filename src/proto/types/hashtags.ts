import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HashTagServiceGrpcClient as _news_HashTagServiceGrpcClient, HashTagServiceGrpcDefinition as _news_HashTagServiceGrpcDefinition } from './news/HashTagServiceGrpc';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  news: {
    DeleteHashTagResponse: MessageTypeDefinition
    GetHashTagRequest: MessageTypeDefinition
    HashTag: MessageTypeDefinition
    HashTagServiceGrpc: SubtypeConstructor<typeof grpc.Client, _news_HashTagServiceGrpcClient> & { service: _news_HashTagServiceGrpcDefinition }
    IdRequest: MessageTypeDefinition
    ListHashTag: MessageTypeDefinition
  }
}

