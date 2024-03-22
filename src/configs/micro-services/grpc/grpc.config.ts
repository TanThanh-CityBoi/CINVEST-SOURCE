import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PACKAGE_ENUM } from 'src/common/enums/grpc.enums';

const protoPath: Array<string> = [
  join(__dirname, 'proto/common.proto'),
  join(__dirname, 'proto/posts.proto'),
  join(__dirname, 'proto/publishers.proto'),
  join(__dirname, 'proto/categories.proto'),
  join(__dirname, 'proto/subjects.proto'),
  join(__dirname, 'proto/advertisings.proto'),
  join(__dirname, 'proto/banners.proto'),
  join(__dirname, 'proto/videos.proto'),
  join(__dirname, 'proto/types.proto'),
  join(__dirname, 'proto/action-types.proto'),
  join(__dirname, 'proto/hashtags.proto'),
];

export const grpcMicroServices = (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const GRPC_URL = configService.get('microservices.grpc_url');
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: PACKAGE_ENUM.NEWS,
      protoPath,
      url: GRPC_URL,
    },
  });
};
