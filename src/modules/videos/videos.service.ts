import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { ENTITY_NAME_ENUM } from 'src/common/enums/entities.enums';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { ORDER_BY_ENUM } from 'src/common/enums/pagination.enums';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { removeDuplicateNullUndefinedElementFromArray } from 'src/common/utils/array.utils';
import { handleNullValue } from 'src/common/utils/handle-null-value.utils';
import { handlePublishAt } from 'src/common/utils/handle-publishAt.utils';
import { mutateQuery } from 'src/common/utils/mutate.utils';
import { EntityManager, In, Repository, SelectQueryBuilder } from 'typeorm';
import { HistoricalLogsEntity } from '../databases/subscribers/entity/historical-logs.entity';
import { LOG_ACTION_ENUM } from '../databases/subscribers/enums/log-actions.enum';
import { UserService } from '../profiles/user/service';
import { HashtagsService } from './../hashtags/hashtags.service';
import {
  CreateVideoDto,
  QueryVideoDto,
  UpdateVideoDto,
  UpdateVideoGRPCDto,
} from './dto/video.dto';
import { VideoEntity } from './entities/video.entity';
@Injectable()
export class VideoService extends BaseAbstractService<VideoEntity> {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepo: Repository<VideoEntity>,
    private readonly entityManager: EntityManager,
    private readonly hashtagsService: HashtagsService,
    private readonly userService: UserService,
  ) {
    super();
  }
  async create(body: CreateVideoDto) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const { hashtags } = body;
        const videoEntity: any = { ...body };
        if (hashtags) {
          const hashtagsEntity = await Promise.all(
            hashtags.map((hashtag) => {
              return this.hashtagsService.create(
                hashtag,
                transactionalEntityManager,
              );
            }),
          );
          videoEntity.hashtags = hashtagsEntity;
        }
        return transactionalEntityManager.save(VideoEntity, videoEntity);
      },
    );
  }

  async generateVideoQueryBuilder() {
    return this.videoRepo
      .createQueryBuilder('video')
      .leftJoinAndSelect('video.advertisings', 'advertisings')
      .leftJoinAndSelect('video.hashtags', 'hashtags')
      .leftJoinAndSelect('video.category', 'category');
  }

  async handleFilter(
    videoQueryBuilder: SelectQueryBuilder<VideoEntity>,
    query: QueryVideoDto,
  ) {
    // where condition
    if (query.title) {
      videoQueryBuilder.andWhere(`video.title like :title`, {
        title: `%${query.title}%`,
      });
    }
    if (query.state) {
      videoQueryBuilder.andWhere(`video.state = :state`, {
        state: query.state,
      });
    }
    if (query.advertisingId) {
      videoQueryBuilder.andWhere(`video.advertisingId = :advertisingId`, {
        advertisingId: query.advertisingId,
      });
    }
    if (query.categoryId) {
      videoQueryBuilder.andWhere(`video.categoryId = :categoryId`, {
        categoryId: query.categoryId,
      });
    }
    return videoQueryBuilder;
  }

  async combineWithUser(listData: VideoEntity[]) {
    const listCreateBy = listData.map((item) => item.createdBy);
    const uniqueListCreateBy =
      removeDuplicateNullUndefinedElementFromArray(listCreateBy);
    try {
      const res = await this.userService.getList({
        subs: uniqueListCreateBy as Array<string>,
        sortOrder: ORDER_BY_ENUM.DESC,
      });
      const users = res?.data || [];
      listData = listData.map((video) => {
        const createBy = video.createdBy;
        const creator = users.find((user) => {
          return user.sub === createBy;
        });
        video.creator = creator;
        return video;
      });
      return listData;
    } catch (error) {
      Logger.error(error);
      Logger.error({
        code: grpc.status.INTERNAL,
        message: ERROR_MESSAGES.FETCH_USER_FAILD,
      });
      return listData;
    }
  }

  async getList(query: QueryVideoDto) {
    const { limit, skip, sortBy, sortOrder, page } = mutateQuery(query);
    let videoQueryBuilder = await this.generateVideoQueryBuilder();
    videoQueryBuilder = await this.handleFilter(videoQueryBuilder, query);
    videoQueryBuilder.skip(skip);
    videoQueryBuilder.take(limit);
    const orderByObj = {};
    if (query.isPriorityAdvertising === YES_NO_ENUM.YES)
      orderByObj['video.advertisingId'] = 'DESC';
    videoQueryBuilder.orderBy({
      ...orderByObj,
      [`video.${sortBy}`]: sortOrder,
    });
    const [listData, countTotalItem] =
      await videoQueryBuilder.getManyAndCount();
    const listDataAfterCombineWithUser = await this.combineWithUser(listData);
    return {
      data: listDataAfterCombineWithUser,
      totalItems: countTotalItem,
      perPage: limit,
      totalPages: Math.ceil(countTotalItem / limit),
      page,
    };
  }

  async getById(id: number) {
    return this.videoRepo.findOne({
      where: {
        id,
      },
      relations: {
        advertisings: true,
        category: true,
        hashtags: true,
      },
    });
  }

  async update(id: number, body: UpdateVideoDto) {
    body = handleNullValue(body);
    body = handlePublishAt(body);
    if (body.state && body.state === StateEnum.DECLINE) {
      return this.handleSaveOldValueForVideo(id);
    }
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const video = await this.videoRepo.findOne({
          where: {
            id,
          },
        });
        if (!video) {
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        }
        const videoEntity = {
          ...video,
          ...body,
        };
        const { hashtags } = body;
        if (hashtags && hashtags.length > 0) {
          const hashtagsEntity = await Promise.all(
            hashtags?.map((hashtag) => {
              return this.hashtagsService.create(
                hashtag,
                transactionalEntityManager,
              );
            }) || [],
          );

          videoEntity.hashtags = hashtagsEntity;
        }
        await transactionalEntityManager.save(VideoEntity, videoEntity);
        const videoDetail = await transactionalEntityManager.findOne(
          VideoEntity,
          {
            relations: {
              advertisings: true,
              category: true,
              hashtags: true,
            },
            where: {
              id,
            },
          },
        );
        return videoDetail;
      },
    );
  }

  async handleSaveOldValueForVideo(id: number) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const videoInHistoricalLogsEntity =
          await transactionalEntityManager.findOne(HistoricalLogsEntity, {
            where: {
              entityId: id,
              action: LOG_ACTION_ENUM.UPDATED,
              entityName: ENTITY_NAME_ENUM.VIDEO,
            },
            order: {
              timestamp: 'DESC',
            },
          });
        if (!videoInHistoricalLogsEntity?.oldValue)
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        let videoOldValue = JSON.parse(videoInHistoricalLogsEntity.oldValue);
        if (!videoOldValue)
          throw new RpcException({
            code: grpc.status.INVALID_ARGUMENT,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        videoOldValue = {
          ...videoOldValue,
          state: StateEnum.APPROVED,
        };
        return this.videoRepo.save(videoOldValue);
      },
    );
  }

  async updateAds(body: UpdateVideoGRPCDto) {
    const { id, ...dataUpdate } = body;
    const videoDetail = await this.videoRepo.findOne({
      where: {
        id,
      },
    });
    if (!videoDetail)
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    const videoEntity = {
      ...videoDetail,
      ...dataUpdate,
      state: StateEnum.APPROVED,
    };
    return this.videoRepo.save(videoEntity);
  }

  async approvedOrReject(body: BaseApprovedRejectDto) {
    const { ids, state } = body;
    if (state === StateEnum.REJECT || state === StateEnum.APPROVED) {
      let videos = await this.videoRepo.findBy({
        id: In(ids),
      });
      if (videos.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      videos = videos.map((video) => {
        video.state = state;
        return video;
      });
      await this.videoRepo.save(videos);
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
      const videos = await this.videoRepo.findBy({
        id: In(ids),
      });
      if (videos.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      await this.videoRepo.delete(ids);
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
          await entityManagerTransaction.delete(VideoEntity, id);
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
