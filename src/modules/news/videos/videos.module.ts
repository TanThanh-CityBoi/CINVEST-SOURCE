import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.VIDEOS,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
