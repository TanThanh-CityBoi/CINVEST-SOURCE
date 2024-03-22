import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerDocs } from './configs/documents/swagger.configs';
import { grpcMicroServices } from './configs/micro-services/grpc/grpc.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  swaggerDocs(app);
  grpcMicroServices(app);
  await app.startAllMicroservices();
  Logger.debug('start all microservices successful');
  const PORT = configService.get('port');
  await app.listen(PORT);
  Logger.debug('Application running on port : ' + PORT);
}
bootstrap();
