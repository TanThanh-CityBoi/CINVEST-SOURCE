import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { SkillController } from './controller';
import { SkillService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.SKILL,
          protoPath: join('./src/proto/proto/skill.proto'),
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
