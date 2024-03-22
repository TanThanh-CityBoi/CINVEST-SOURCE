import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { BannersController } from './banners.controller';
import { BannerService } from './banners.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.BANNERS,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [BannersController],
  providers: [BannerService],
})
export class BannersModule {}
