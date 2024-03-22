import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerDocs = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Cinvest API')
    .setDescription('News Service')
    .setVersion('0.1')
    .addBearerAuth();
  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('doc', app, document);
};
