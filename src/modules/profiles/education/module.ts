import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { EducationController } from './controller';
import { EducationService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.EDUCATION,
          protoPath: './src/proto/proto/education.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
