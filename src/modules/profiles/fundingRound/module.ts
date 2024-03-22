import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { FundingRoundController } from './controller';
import { FundingRoundService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.FUNDING,
          protoPath: './src/proto/proto/fundingRound.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [FundingRoundController],
  providers: [FundingRoundService],
})
export class FundingRoundModule {}
