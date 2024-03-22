import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { ENTITY_NAME_ENUM } from 'src/common/enums/entities.enums';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { StateEnum } from 'src/common/enums/state.enums';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { TPaginationResult } from 'src/common/types';
import { handleNullValue } from 'src/common/utils/handle-null-value.utils';
import { mutateQueryPagination } from 'src/common/utils/mutate.utils';
import { EntityManager, In, Repository, SelectQueryBuilder } from 'typeorm';
import { HistoricalLogsEntity } from '../databases/subscribers/entity/historical-logs.entity';
import { LOG_ACTION_ENUM } from '../databases/subscribers/enums/log-actions.enum';
import {
  CreatePublisherDto,
  QueryPublisherDto,
  UpdatePublisherDto,
} from './dto/publisher.dto';
import { PublisherEntity } from './entities/publisher.entity';
import { PUBLISHER_POST_TYPE_ENUM } from './enums/publisher.enum';

@Injectable()
export class PublishersService extends BaseAbstractService<PublisherEntity> {
  constructor(
    @InjectRepository(PublisherEntity)
    private readonly publisherRepo: Repository<PublisherEntity>,
    private readonly entityManager: EntityManager,
  ) {
    super();
  }

  create(createPublisherDto: CreatePublisherDto) {
    Logger.debug(createPublisherDto);
    return this.publisherRepo.save(createPublisherDto);
  }

  async getList(
    query: QueryPublisherDto,
  ): Promise<PublisherEntity[] | TPaginationResult<PublisherEntity>> {
    const { limit, skip, sortBy, sortOrder, page } =
      mutateQueryPagination(query);
    let publisherQueryBuilder = await this.generatePublisherQueryBuilder();
    publisherQueryBuilder = await this.handleFilter(
      publisherQueryBuilder,
      query,
    );
    publisherQueryBuilder.skip(skip);
    publisherQueryBuilder.take(limit);
    publisherQueryBuilder.orderBy({ [`publishers.${sortBy}`]: sortOrder });
    const [listData, countTotalItem] =
      await publisherQueryBuilder.getManyAndCount();

    return {
      data: listData,
      totalItems: countTotalItem,
      perPage: limit,
      totalPages: Math.ceil(countTotalItem / limit),
      page,
    };
  }

  async generatePublisherQueryBuilder() {
    return this.publisherRepo
      .createQueryBuilder('publishers')
      .leftJoinAndSelect('publishers.type', 'type');
  }

  async handleFilter(
    publisherQueryBuilder: SelectQueryBuilder<PublisherEntity>,
    query: QueryPublisherDto,
  ) {
    // where condition
    if (query.name) {
      publisherQueryBuilder.andWhere(`publishers.name like :name`, {
        name: `%${query.name}%`,
      });
    }
    if (query.countryId) {
      publisherQueryBuilder.andWhere(`publishers.countryId = :countryId`, {
        countryId: query.countryId,
      });
    }
    if (query.cityId) {
      publisherQueryBuilder.andWhere(`publishers.cityId = :cityId`, {
        cityId: query.cityId,
      });
    }
    if (query.typeId) {
      publisherQueryBuilder.andWhere(`publishers.typeId = :typeId`, {
        typeId: query.typeId,
      });
    }
    if (query.postType) {
      publisherQueryBuilder.andWhere(`publishers.postType IN (:...postTypes)`, {
        postTypes: [query?.postType, PUBLISHER_POST_TYPE_ENUM.BOTH],
      });
    }
    if (query.state) {
      publisherQueryBuilder.andWhere(`publishers.state = :state`, {
        state: query.state,
      });
    }

    if (query.createdAt) {
      publisherQueryBuilder.andWhere(
        `DATE_FORMAT(publishers.createdAt, "%Y-%m-%d") = :createdAt`,
        { createdAt: query.createdAt },
      );
    }
    return publisherQueryBuilder;
  }

  getById(id: number): Promise<PublisherEntity> {
    return this.publisherRepo.findOne({
      relations: { type: true },
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePublisherDto: UpdatePublisherDto) {
    updatePublisherDto = handleNullValue(updatePublisherDto);
    if (
      updatePublisherDto.state &&
      updatePublisherDto.state === StateEnum.DECLINE
    ) {
      return this.handleSaveOldValueForPublisher(id);
    }
    await this.publisherRepo.save({ id, ...updatePublisherDto });
    return this.getById(id);
  }

  async handleSaveOldValueForPublisher(id: number) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const publisherInHistoricalLogsEntity =
          await transactionalEntityManager.findOne(HistoricalLogsEntity, {
            where: {
              entityId: id,
              action: LOG_ACTION_ENUM.UPDATED,
              entityName: ENTITY_NAME_ENUM.PUBLISHER,
            },
            order: {
              timestamp: 'DESC',
            },
          });
        if (!publisherInHistoricalLogsEntity?.oldValue)
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        let publisherOldValue = JSON.parse(
          publisherInHistoricalLogsEntity.oldValue,
        );
        if (!publisherOldValue)
          throw new RpcException({
            code: grpc.status.INVALID_ARGUMENT,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        publisherOldValue = {
          ...publisherOldValue,
          state: StateEnum.APPROVED,
        };
        return this.publisherRepo.save(publisherOldValue);
      },
    );
  }

  async approvedOrReject(body: BaseApprovedRejectDto) {
    const { ids, state } = body;
    if (state === StateEnum.REJECT || state === StateEnum.APPROVED) {
      let publishers = await this.publisherRepo.findBy({
        id: In(ids),
      });
      if (publishers.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      publishers = publishers.map((publisher) => {
        publisher.state = state;
        return publisher;
      });
      await this.publisherRepo.save(publishers);
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: ERROR_MESSAGES.MUST_BE_APPROVED_OR_REJECT,
    };
  }

  async deleteMultiple(ids: Array<number>) {
    try {
      const publishers = await this.publisherRepo.findBy({
        id: In(ids),
      });
      if (publishers.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      await this.publisherRepo.delete(ids);
      return {
        success: true,
      };
    } catch (error) {
      Logger.error(error);
      return {
        success: false,
      };
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return this.entityManager.transaction(
        async (entityManagerTransaction) => {
          await entityManagerTransaction.delete(PublisherEntity, id);
          return {
            id,
            success: true,
          };
        },
      );
    } catch (error) {
      Logger.error(error);
      return {
        id,
        success: false,
      };
    }
  }
}
