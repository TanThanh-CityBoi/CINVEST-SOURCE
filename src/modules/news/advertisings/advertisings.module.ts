import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { AdvertisingsController } from './advertisings.controller';
import { AdvertisingsService } from './advertisings.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.ADVERTISING,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [AdvertisingsController],
  providers: [AdvertisingsService],
})
export class AdvertisingsModule {}
