import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';
import { CognitoModule } from 'src/modules/cognito/module';

import { UserController } from './controller';
import { UserService } from './service';

@Module({
  imports: [
    CognitoModule,
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.USER,
          protoPath: './src/proto/proto/user.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
