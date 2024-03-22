import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from './../../common/dto/id.dto';
import { CategoriesService } from './categories.service';
import {
  CreateCategoryDto,
  QueryCategoryDto,
  UpdateCategoryGRPCDto,
} from './dto/category.dto';

@Controller()
export class CategoriesServiceGrpc {
  constructor(private readonly categoriesService: CategoriesService) {}

  @GrpcMethod()
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @GrpcMethod()
  getList(query: QueryCategoryDto) {
    return this.categoriesService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.categoriesService.getById(idDto.id);
  }

  @GrpcMethod()
  update(updateCategoryGRPCDto: UpdateCategoryGRPCDto) {
    const { id, ...dataUpdate } = updateCategoryGRPCDto;
    return this.categoriesService.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.categoriesService.delete(idDto.id);
  }
}
