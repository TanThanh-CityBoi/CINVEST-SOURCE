import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SkillServiceClient as _skills_SkillServiceClient, SkillServiceDefinition as _skills_SkillServiceDefinition } from './skills/SkillService';

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
  skills: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QuerySkill: MessageTypeDefinition
    Skill: MessageTypeDefinition
    SkillService: SubtypeConstructor<typeof grpc.Client, _skills_SkillServiceClient> & { service: _skills_SkillServiceDefinition }
  }
}

