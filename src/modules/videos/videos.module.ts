import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { HashtagsModule } from '../hashtags/hashtags.module';
import { UserModule } from '../profiles/user/module';
import { VideoEntity } from './entities/video.entity';
import { VideosServiceGRPC } from './videos.grpc';
import { VideoService } from './videos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VideoEntity]),
    HashtagsModule,
    UserModule,
    CategoriesModule,
  ],
  controllers: [VideosServiceGRPC],
  providers: [VideoService],
})
export class VideoModule {}
