import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProductTypeServiceClient as _productTypes_ProductTypeServiceClient, ProductTypeServiceDefinition as _productTypes_ProductTypeServiceDefinition } from './productTypes/ProductTypeService';

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
  productTypes: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    ProductType: MessageTypeDefinition
    ProductTypeService: SubtypeConstructor<typeof grpc.Client, _productTypes_ProductTypeServiceClient> & { service: _productTypes_ProductTypeServiceDefinition }
    QueryProductType: MessageTypeDefinition
  }
}

