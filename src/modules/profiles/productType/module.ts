import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PROFILE_SERVICE } from 'src/common/constants/constants';
import { ClientEnum, PackageEnum } from 'src/common/enums/enums';

import { ProductTypeController } from './controller';
import { ProductTypeService } from './service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ClientEnum.PROFILE,
        transport: Transport.GRPC,
        options: {
          package: PackageEnum.PRODUCT_TYPE,
          protoPath: './src/proto/proto/productType.proto',
          url: PROFILE_SERVICE,
        },
      },
    ]),
  ],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
})
export class ProductTypeModule {}
