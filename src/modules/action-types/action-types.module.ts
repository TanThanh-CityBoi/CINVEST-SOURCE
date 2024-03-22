import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionTypesServiceGrpc } from './action-types.grpc';
import { ActionTypesService } from './action-types.service';
import { ActionTypeEntity } from './entities/action-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActionTypeEntity])],
  controllers: [ActionTypesServiceGrpc],
  providers: [ActionTypesService],
})
export class ActionTypesModule {}
