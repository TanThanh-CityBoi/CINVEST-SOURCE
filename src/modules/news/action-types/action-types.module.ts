import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { ActionTypesController } from './action-types.controller';
import { ActionTypesService } from './action-types.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.ACTION_TYPES,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [ActionTypesController],
  providers: [ActionTypesService],
})
export class ActionTypesModule {}
