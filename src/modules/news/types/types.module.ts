import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.TYPES,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
