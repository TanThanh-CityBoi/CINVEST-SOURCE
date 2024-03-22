import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesServiceGrpc } from './categories.grpc';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoriesServiceGrpc],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
