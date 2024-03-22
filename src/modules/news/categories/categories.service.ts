import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import {
  CreateCategoryDto,
  QueryCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';

@Injectable()
export class CategoriesService {
  private categoriesGRPCService;

  constructor(@Inject(ClientEnum.CATEGORIES) private client: ClientGrpc) {}

  onModuleInit() {
    this.categoriesGRPCService = this.client.getService(
      ServicesEnum.CATEGORIES,
    );
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesGRPCService.create(createCategoryDto);
  }

  getList(query: QueryCategoryDto) {
    return this.categoriesGRPCService.getList(query);
  }

  getById(id: number) {
    return this.categoriesGRPCService.getById({ id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesGRPCService.update({ ...updateCategoryDto, id });
  }

  remove(id: number) {
    return this.categoriesGRPCService.delete({ id });
  }
}
