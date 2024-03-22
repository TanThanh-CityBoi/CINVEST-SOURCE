import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';
import { UserService } from './service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: ClientEnum.PROFILE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            package: PackageEnum.USER,
            protoPath: './src/proto/proto/user.proto',
            url: configService.get('microservices.grpc_profile_url'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],

  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
