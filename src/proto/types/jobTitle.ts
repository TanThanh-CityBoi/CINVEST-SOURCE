import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { JobTitleServiceClient as _jobTitles_JobTitleServiceClient, JobTitleServiceDefinition as _jobTitles_JobTitleServiceDefinition } from './jobTitles/JobTitleService';

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
  jobTitles: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    JobTitle: MessageTypeDefinition
    JobTitleService: SubtypeConstructor<typeof grpc.Client, _jobTitles_JobTitleServiceClient> & { service: _jobTitles_JobTitleServiceDefinition }
    QueryJobTitle: MessageTypeDefinition
  }
}

