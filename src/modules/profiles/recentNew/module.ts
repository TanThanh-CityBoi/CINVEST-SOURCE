import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { RecentNewController } from './controller';
import { RecentNewService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.RECENT_NEW,
          protoPath: './src/proto/proto/recentNew.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [RecentNewController],
  providers: [RecentNewService],
})
export class RecentNewModule {}
