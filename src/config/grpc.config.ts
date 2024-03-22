import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GRPC_URL } from 'src/common/constants/constants';
import { PACKAGE_ENUM } from 'src/common/enums/grpc.enums';

const protoPath: Array<string> = [join(__dirname, 'proto/common.proto')];

export const grpcMicroServices = (app: INestApplication) => {
  const microservice = app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: PACKAGE_ENUM.NEWS,
      protoPath,
      url: GRPC_URL,
    },
  });
};
