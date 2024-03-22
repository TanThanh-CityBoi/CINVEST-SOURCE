import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisingServiceGrpc } from './advertisings.grpc';
import { AdvertisingService } from './advertisings.service';
import { AdvertisingEntity } from './entities/advertisings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdvertisingEntity])],
  controllers: [AdvertisingServiceGrpc],
  providers: [AdvertisingService],
})
export class AdvertisingModule {}
