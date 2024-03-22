import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { mutateQueryPagination } from 'src/common/utils/mutate.utils';
import {
  EntityManager,
  FindOptionsWhere,
  ILike,
  In,
  Repository,
} from 'typeorm';
import {
  CreateHashtagDto,
  QueryHashtagDto,
  QueryHashtagExistDto,
  UpdateHashtagDto,
} from './dto/hashtag.dto';
import { HashtagEntity } from './entities/hashtag.entity';

@Injectable()
export class HashtagsService extends BaseAbstractService<HashtagEntity> {
  constructor(
    @InjectRepository(HashtagEntity)
    private readonly hashTagRepo: Repository<HashtagEntity>,
  ) {
    super();
  }

  async create(body: CreateHashtagDto, transaction?: EntityManager) {
    const hashtag = await this.hashTagRepo.findOne({
      where: {
        name: body.name,
      },
    });
    if (hashtag) return hashtag;
    if (transaction) {
      return transaction.save(HashtagEntity, body);
    }
    return this.hashTagRepo.save(body);
  }

  async getList(query: QueryHashtagDto) {
    const { limit, skip, sortBy, sortOrder, page } =
      mutateQueryPagination(query);

    const where: FindOptionsWhere<HashtagEntity> = {};

    if (query?.name) {
      where.name = ILike(`%${query.name}%`);
    }

    if (query?.ids) {
      where.id = In(query.ids);
    }

    const [listData, countTotalItem] = await this.hashTagRepo.findAndCount({
      where,
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

  async getListExist(query: QueryHashtagExistDto) {
    return this.hashTagRepo.find({
      where: {
        name: In(query.name),
      },
    });
  }

  async getById(id: number) {
    return this.hashTagRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, body: UpdateHashtagDto) {
    await this.hashTagRepo.update(id, body);
    return this.getById(id);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.hashTagRepo.delete(id);
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
