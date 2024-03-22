import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import LoggerMiddleware from './middlewares/logger.middleware';
import { CognitoModule } from './modules/cognito/module';
import { DatabasesModule } from './modules/databases/databases.module';
import { FileModule } from './modules/file/module';
import ormConfig from './config/orm.config';

@Module({
  imports: [
    DatabasesModule,
    FileModule,
    CognitoModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
