import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerEntity } from '../banners/entities/banners.entity';
import { PostEntity } from '../posts/entities/post.entity';
import { VideoEntity } from '../videos/entities/video.entity';
import { TaskSchedulingController } from './task-scheduling.controller';
import { TaskSchedulingService } from './task-scheduling.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([PostEntity, BannerEntity, VideoEntity]),
  ],
  controllers: [TaskSchedulingController],
  providers: [TaskSchedulingService],
})
export class TaskSchedulingModule {}
