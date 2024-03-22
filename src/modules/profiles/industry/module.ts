import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { IndustryController } from './controller';
import { IndustryService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.INDUSTRY,
          protoPath: './src/proto/proto/industry.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [IndustryController],
  providers: [IndustryService],
})
export class IndustryModule {}
