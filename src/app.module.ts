import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import LoggerMiddleware from './middlewares/logger.middleware';
import { AuthModule } from './modules/auth/module';
import { FileModule } from './modules/files/module';
import { NewsModule } from './modules/news/news.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { StoresModule } from './modules/stores/stores.module';

@Module({
  imports: [NewsModule, ProfilesModule, AuthModule, FileModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
