import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { JobTitleController } from './controller';
import { JobTitleService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.JOBTITLE,
          protoPath: './src/proto/proto/jobTitle.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [JobTitleController],
  providers: [JobTitleService],
})
export class JobTitleModule {}
