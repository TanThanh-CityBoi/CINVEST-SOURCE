import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { StatisticServiceClient as _statistic_StatisticServiceClient, StatisticServiceDefinition as _statistic_StatisticServiceDefinition } from './statistic/StatisticService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  statistic: {
    GetRequest: MessageTypeDefinition
    GetResponse: MessageTypeDefinition
    Statistic: MessageTypeDefinition
    StatisticService: SubtypeConstructor<typeof grpc.Client, _statistic_StatisticServiceClient> & { service: _statistic_StatisticServiceDefinition }
  }
}

