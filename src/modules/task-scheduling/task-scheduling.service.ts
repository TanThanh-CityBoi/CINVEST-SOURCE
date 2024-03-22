import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { Repository } from 'typeorm';
import { PostEntity } from '../posts/entities/post.entity';
import { VideoEntity } from '../videos/entities/video.entity';
@Injectable()
export class TaskSchedulingService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
    @InjectRepository(BannerEntity)
    private readonly bannerRepo: Repository<BannerEntity>,
    @InjectRepository(VideoEntity)
    private readonly videoRepo: Repository<VideoEntity>,
  ) {}

  @Cron('0 0 * * * *')
  calculateAdvertising() {
    Logger.debug('run calculateAdvertising');
    return Promise.allSettled([
      this.calculateAdvertisingForPost(),
      this.calculateAdvertisingForVideo(),
      this.calculateAdvertisingForBanner(),
    ]);
  }

  async calculateAdvertisingForPost() {
    const currentTime = moment();
    const posts = await this.postRepo
      .createQueryBuilder('post')
      .andWhere('post.advertisingId IS NOT NULL')
      .getMany();
    return Promise.allSettled(
      posts?.map((post) => {
        // calculate time here
        const { startDateAdvertising, advertisingTime } = post;
        if (!(startDateAdvertising && advertisingTime)) return;
        const currentMinusAdvertisingTime = currentTime.subtract(
          advertisingTime,
          'hours',
        ); // Subtract 30 minutes
        // currentMinusAdvertisingTime < startDateAdvertising
        if (currentMinusAdvertisingTime.isBefore(startDateAdvertising)) return;
        post.advertisingId = null;
        post.advertisingTime = null;
        post.startDateAdvertising = null;
        return this.postRepo.save(post);
      }) || [],
    );
  }

  async calculateAdvertisingForVideo() {
    const currentTime = moment();
    const videos = await this.videoRepo
      .createQueryBuilder('video')
      .andWhere('video.advertisingId IS NOT NULL')
      .getMany();
    return Promise.allSettled(
      videos?.map((video) => {
        // calculate time here
        const { startDateAdvertising, advertisingTime } = video;
        if (!(startDateAdvertising && advertisingTime)) return;
        const currentMinusAdvertisingTime = currentTime.subtract(
          advertisingTime,
          'hours',
        ); // Subtract 30 minutes
        // currentMinusAdvertisingTime < startDateAdvertising
        if (currentMinusAdvertisingTime.isBefore(startDateAdvertising)) return;
        video.advertisingId = null;
        video.advertisingTime = null;
        video.startDateAdvertising = null;
        return this.videoRepo.save(video);
      }) || [],
    );
  }

  async calculateAdvertisingForBanner() {
    const currentTime = moment();
    const banners = await this.bannerRepo
      .createQueryBuilder('banner')
      .andWhere('banner.advertisingId IS NOT NULL')
      .getMany();
    return Promise.allSettled(
      banners?.map((banner) => {
        // calculate time here
        const { startDateAdvertising, advertisingDays } = banner;
        if (!(startDateAdvertising && advertisingDays)) return;
        const currentMinusAdvertisingTime = currentTime.subtract(
          advertisingDays,
          'days',
        ); // Subtract 30 minutes
        // currentMinusAdvertisingTime < startDateAdvertising
        if (currentMinusAdvertisingTime.isBefore(startDateAdvertising)) return;
        banner.advertisingId = null;
        banner.advertisingDays = null;
        banner.startDateAdvertising = null;
        return this.bannerRepo.save(banner);
      }) || [],
    );
  }
}
