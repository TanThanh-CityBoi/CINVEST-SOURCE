import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';
import { BannersModule } from 'src/modules/news/banners/banners.module';

import { BannersController } from './store-banners.controller';

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
    BannersModule,
  ],
  controllers: [BannersController],
})
export class StoreBannersModule {}
