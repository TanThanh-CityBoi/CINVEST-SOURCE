import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { Repository } from 'typeorm';

import { mutateQuery } from 'src/common/utils/mutate.utils';
import {
  CreateActionTypeDto,
  QueryActionTypeDto,
  UpdateActionTypeDto,
} from './dto/action-types.dto';
import { ActionTypeEntity } from './entities/action-types.entity';

@Injectable()
export class ActionTypesService extends BaseAbstractService<ActionTypeEntity> {
  constructor(
    @InjectRepository(ActionTypeEntity)
    private readonly repo: Repository<ActionTypeEntity>,
  ) {
    super();
  }

  create(body: CreateActionTypeDto) {
    return this.repo.save(body);
  }

  async getList(query: QueryActionTypeDto) {
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

  async update(id: number, dataUpdate: UpdateActionTypeDto) {
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
