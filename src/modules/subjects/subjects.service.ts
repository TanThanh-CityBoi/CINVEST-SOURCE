import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { mutateQueryPagination } from 'src/common/utils/mutate.utils';
import { FindOptionsWhere, ILike, In, Repository } from 'typeorm';
import {
  CreateSubjectDto,
  QuerySubjectDto,
  UpdateSubjectDto,
} from './dto/subject.dto';
import { SubjectEntity } from './entities/subject.entity';
@Injectable()
export class SubjectsService extends BaseAbstractService<SubjectEntity> {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepo: Repository<SubjectEntity>,
  ) {
    super();
  }

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectRepo.save(createSubjectDto);
  }

  async getList(query: QuerySubjectDto) {
    const { limit, skip, sortBy, sortOrder, page } =
      mutateQueryPagination(query);
    const where: FindOptionsWhere<SubjectEntity> = {};
    if (query?.name) {
      where.name = ILike(`%${query.name}%`);
    }
    if (query?.categoryIds) {
      where.categoryId = In(query.categoryIds);
    }
    const [listData, countTotalItem] = await this.subjectRepo.findAndCount({
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

  async getById(id: number) {
    const subject = await this.subjectRepo.findOne({
      where: {
        id,
      },
    });
    if (!subject) {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: 'Subject Not Found!',
      });
    }
    return subject;
  }

  async getByIds(ids: Array<number>) {
    const data = await this.subjectRepo.findBy({
      id: In(ids),
    });
    if (data?.length !== ids.length) {
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    }
    return data;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    await this.subjectRepo.update(id, updateSubjectDto);
    return this.getById(id);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.subjectRepo.delete(id);
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
