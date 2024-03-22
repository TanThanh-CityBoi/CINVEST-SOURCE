import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { PORT } from './common/constants/constants';
import { swaggerConfig } from './config/swagger.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ credentials: true, origin: true }));
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  swaggerConfig(app);
  await app.listen(PORT);
  Logger.debug('Application running on port : ' + PORT);
}
bootstrap();
