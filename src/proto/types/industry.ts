import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { IndustryServiceClient as _industries_IndustryServiceClient, IndustryServiceDefinition as _industries_IndustryServiceDefinition } from './industries/IndustryService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bases: {
    CountResponse: MessageTypeDefinition
    DeleteResponse: MessageTypeDefinition
    Id: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Any: MessageTypeDefinition
    }
  }
  industries: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    Industry: MessageTypeDefinition
    IndustryService: SubtypeConstructor<typeof grpc.Client, _industries_IndustryServiceClient> & { service: _industries_IndustryServiceDefinition }
    QueryIndustry: MessageTypeDefinition
  }
}

