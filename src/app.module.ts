import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { DatabasesModule } from './modules/databases/databases.module';

import { ActionTypesModule } from './modules/action-types/action-types.module';
import { AdvertisingModule } from './modules/advertisings/advertisings.module';
import { BannerModule } from './modules/banners/banners.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { PostsModule } from './modules/posts/posts.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { PublishersModule } from './modules/publishers/publishers.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { TaskSchedulingModule } from './modules/task-scheduling/task-scheduling.module';
import { TypesModule } from './modules/types/types.module';
import { VideoModule } from './modules/videos/videos.module';

@Module({
  imports: [
    CategoriesModule,
    SubjectsModule,
    TypesModule,
    ActionTypesModule,
    AdvertisingModule,
    PublishersModule,
    PostsModule,
    VideoModule,
    BannerModule,
    TaskSchedulingModule,
    ConfigurationModule,
    DatabasesModule,
    ProfilesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
