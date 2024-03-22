import { Module } from '@nestjs/common';

import { ActionTypesModule } from './action-types/action-types.module';
import { AdvertisingsModule } from './advertisings/advertisings.module';
import { BannersModule } from './banners/banners.module';
import { CategoriesModule } from './categories/categories.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { PostsModule } from './posts/posts.module';
import { PublishersModule } from './publishers/publishers.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TypesModule } from './types/types.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [
    CategoriesModule,
    SubjectsModule,
    TypesModule,
    ActionTypesModule,
    AdvertisingsModule,
    HashtagsModule,
    PublishersModule,
    PostsModule,
    VideosModule,
    BannersModule,
  ],
})
export class NewsModule {}
