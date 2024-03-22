import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { mutateQuery } from 'src/common/utils/mutate.utils';
import { In, Repository } from 'typeorm';
import {
  CreateCategoryDto,
  QueryCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesService extends BaseAbstractService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
  ) {
    super();
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.save(createCategoryDto);
  }

  async getList(query: QueryCategoryDto) {
    const { limit, skip, sortBy, sortOrder, page } = mutateQuery(query);
    let relations = {};
    if (query.isIncludeSubject) {
      relations = {
        ...relations,
        subjects: true,
      };
    }
    let where = {};
    if (query.name) {
      where = {
        ...where,
        name: query.name,
      };
    }
    const [listData, countTotalItem] = await this.categoryRepo.findAndCount({
      where,
      relations,
      skip,
      take: limit,
      order: {
        [sortBy]: sortOrder,
      },
    });
    return {
      data: listData,
      totalItems: countTotalItem,
      perPage: limit,
      totalPages: Math.ceil(countTotalItem / limit),
      page,
    };
  }

  async getById(id: number): Promise<CategoryEntity> {
    const data = await this.categoryRepo.findOne({
      where: {
        id,
      },
    });
    if (!data)
      throw new RpcException({
        code: 404,
        message: 'Not Found!',
      });
    return data;
  }

  async getByIds(ids: Array<number>) {
    const data = await this.categoryRepo.findBy({
      id: In(ids),
    });
    if (data.length !== ids.length) {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    }
    return data;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepo.update(id, updateCategoryDto);
    return this.getById(id);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.categoryRepo.delete(id);
      return {
        id,
        success: true,
      };
    } catch (error) {
      Logger.error(error);
      return {
        id,
        success: false,
      };
    }
  }
}
