import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagEntity } from './entities/hashtag.entity';
import { HashTagServiceGrpc } from './hashtags.grpc';
import { HashtagsService } from './hashtags.service';

@Module({
  imports: [TypeOrmModule.forFeature([HashtagEntity])],
  controllers: [HashTagServiceGrpc],
  providers: [HashtagsService],
  exports: [HashtagsService],
})
export class HashtagsModule {}
