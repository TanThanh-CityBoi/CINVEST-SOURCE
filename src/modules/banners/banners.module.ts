import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { SubjectsModule } from '../subjects/subjects.module';
import { BannersServiceGRPC } from './banners.grpc';
import { BannersService } from './banners.service';
import { BannerEntity } from './entities/banners.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BannerEntity]),
    CategoriesModule,
    SubjectsModule,
  ],
  controllers: [BannersServiceGRPC],
  providers: [BannersService],
})
export class BannerModule {}
