import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherEntity } from './entities/publisher.entity';
import { PublisherServiceGrpc } from './publishers.grpc';
import { PublishersService } from './publishers.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublisherEntity])],
  controllers: [PublisherServiceGrpc],
  providers: [PublishersService],
})
export class PublishersModule {}
