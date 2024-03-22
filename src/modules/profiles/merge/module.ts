import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { MergeController } from './controller';
import { MergeService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.MERGE,
          protoPath: './src/proto/proto/merge.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [MergeController],
  providers: [MergeService],
})
export class MergeModule {}
