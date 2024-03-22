import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { AreaController } from './controller';
import { AreaService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.AREA,
          protoPath: './src/proto/proto/area.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}
