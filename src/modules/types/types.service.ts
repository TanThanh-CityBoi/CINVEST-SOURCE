import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { Repository } from 'typeorm';

import { mutateQuery } from 'src/common/utils/mutate.utils';
import { CreateTypeDto, QueryTypeDto, UpdateTypeDto } from './dto/types.dto';
import { TypeEntity } from './entities/types.entity';

@Injectable()
export class TypesService extends BaseAbstractService<TypeEntity> {
  constructor(
    @InjectRepository(TypeEntity)
    private readonly repo: Repository<TypeEntity>,
  ) {
    super();
  }

  create(body: CreateTypeDto) {
    return this.repo.save(body);
  }

  async getList(query: QueryTypeDto) {
    const { limit, skip, sortBy, sortOrder, page, conditions } =
      mutateQuery(query);
    const [listData, countTotalItem] = await this.repo.findAndCount({
      where: { ...conditions },
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

  async getById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, dataUpdate: UpdateTypeDto) {
    await this.repo.update(id, dataUpdate);
    return this.getById(id);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.repo.delete(id);
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
