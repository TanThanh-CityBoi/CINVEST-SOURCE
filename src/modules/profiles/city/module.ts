import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { CityController } from './controller';
import { CityService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.CITY,
          protoPath: './src/proto/proto/city.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
