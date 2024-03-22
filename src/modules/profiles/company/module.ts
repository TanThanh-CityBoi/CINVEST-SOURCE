import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { CompanyController } from './controller';
import { CompanyService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.COMPANY,
          protoPath: './src/proto/proto/company.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
