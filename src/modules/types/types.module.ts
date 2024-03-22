import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './entities/types.entity';
import { TypesServiceGrpc } from './types.grpc';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypesServiceGrpc],
  providers: [TypesService],
})
export class TypesModule {}
