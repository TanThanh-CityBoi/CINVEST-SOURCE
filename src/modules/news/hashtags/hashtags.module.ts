import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'src/common/constants/constants';
import { protoFiles } from 'src/common/constants/proto.constant';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { HashTagsContorller } from './hashtags.controller';
import { HashtagService } from './hashtags.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.HASHTAGS,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.NEWS,
          protoPath: protoFiles,
          url: NEWS_SERVICE,
        },
      },
    ]),
  ],
  controllers: [HashTagsContorller],
  providers: [HashtagService],
})
export class HashtagsModule {}
