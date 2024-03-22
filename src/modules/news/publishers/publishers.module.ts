import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PUBLISHER,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
