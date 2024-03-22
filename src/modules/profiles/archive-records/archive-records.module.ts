import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';
import { CognitoModule } from 'src/modules/cognito/module';

import { ArchiveRecordController } from './archive-records.controller';
import { ArchiveRecordService } from './archive-records.service';

@Module({
  imports: [
    CognitoModule,
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.ARCHIVE_RECORD,
          protoPath: './src/proto/proto/archiveRecord.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [ArchiveRecordController],
  providers: [ArchiveRecordService],
})
export class ArchiveRecordsModule {}
