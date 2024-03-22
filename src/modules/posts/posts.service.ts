import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { ENTITY_NAME_ENUM } from 'src/common/enums/entities.enums';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { ORDER_BY_ENUM } from 'src/common/enums/pagination.enums';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { TPaginationResult } from 'src/common/types';
import { removeDuplicateNullUndefinedElementFromArray } from 'src/common/utils/array.utils';
import { handleNullValue } from 'src/common/utils/handle-null-value.utils';
import { handlePublishAt } from 'src/common/utils/handle-publishAt.utils';
import {
  removeSpecialCharacters,
  removeVietnameseAccents
} from 'src/common/utils/language.utils';
import { mutateQuery } from 'src/common/utils/mutate.utils';
import { formatZeroFirstForNumber } from 'src/common/utils/number.utils';
import { EntityManager, In, Repository, SelectQueryBuilder } from 'typeorm';
import { HistoricalLogsEntity } from '../databases/subscribers/entity/historical-logs.entity';
import { LOG_ACTION_ENUM } from '../databases/subscribers/enums/log-actions.enum';
import { UserService } from '../profiles/user/service';
import { HashtagsService } from './../hashtags/hashtags.service';
import {
  CreatePostDto,
  QueryPostDto,
  UpdatePostAdsGRPCDto,
  UpdatePostApprovedRejectDto,
  UpdatePostDto
} from './dto/post.dto';
import { PostEntity } from './entities/post.entity';
@Injectable()
export class PostsService extends BaseAbstractService<PostEntity> {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
    private readonly hashtagsService: HashtagsService,
    private readonly entityManager: EntityManager,
    private readonly userService: UserService,
  ) {
    super();
  }
  async create(createPostDto: CreatePostDto) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const postEntity: any = createPostDto;
        if (createPostDto?.hashtags) {
          const { hashtags } = createPostDto;
          const hashtagsEntity = await Promise.all(
            hashtags?.map((hashtag) => {
              return this.hashtagsService.create(
                hashtag,
                transactionalEntityManager,
              );
            }) || [],
          );
          postEntity.hashtags = hashtagsEntity;
        }
        const postCreated = await transactionalEntityManager.save(
          PostEntity,
          postEntity,
        );
        postCreated.url = this.createUrl(postCreated.title, postCreated.id);
        return transactionalEntityManager.save(PostEntity, postCreated);
      },
    );
  }

  createUrl(title: string, id: number) {
    const postTitleRemovedAccents = removeVietnameseAccents(title);
    const postTitleRemoveSpecialCharacters = removeSpecialCharacters(
      postTitleRemovedAccents,
    );
    const hashTitle =
      postTitleRemoveSpecialCharacters
        ?.toLowerCase()
        .replace(/[ ]/g, '-')
        .replace(/[,.?:;*&^%$#@]/g, '') || '';
    const formatId = formatZeroFirstForNumber(id);
    return `${hashTitle}-${formatId}`;
  }

  async getList(
    query: QueryPostDto,
  ): Promise<PostEntity[] | TPaginationResult<PostEntity>> {
    const { limit, skip, sortBy, sortOrder, page } = mutateQuery(query);
    let postQueryBuilder = await this.generatePostQueryBuilder();
    postQueryBuilder = await this.handleFilter(postQueryBuilder, query);
    postQueryBuilder.skip(skip);
    postQueryBuilder.take(limit);
    const orderByObj = {};
    if (query.isPriorityAdvertising === YES_NO_ENUM.YES)
      orderByObj['posts.advertisingId'] = 'DESC';
    postQueryBuilder.orderBy({ ...orderByObj, [`posts.${sortBy}`]: sortOrder });
    const [listData, countTotalItem] = await postQueryBuilder.getManyAndCount();
    const listDataAfterCombineWithUser = await this.combineWithUser(listData);
    return {
      data: listDataAfterCombineWithUser,
      totalItems: countTotalItem,
      perPage: limit,
      totalPages: Math.ceil(countTotalItem / limit),
      page,
    };
  }

  async generatePostQueryBuilder() {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.publisher', 'publisher')
      .leftJoinAndSelect('posts.advertisings', 'advertisings')
      .leftJoinAndSelect('posts.hashtags', 'hashtags')
      .leftJoinAndSelect('posts.category', 'category')
      .leftJoinAndSelect('posts.subject', 'subject');
  }

  async handleFilter(
    postQueryBuilder: SelectQueryBuilder<PostEntity>,
    query: QueryPostDto,
  ) {
    // where condition
    if (query?.title) {
      postQueryBuilder.andWhere(`posts.title like :title`, {
        title: `%${query.title}%`,
      });
    }
    if (query?.areaId) {
      postQueryBuilder.andWhere(`posts.areaId = :areaId`, {
        areaId: query.areaId,
      });
    }
    if (query?.countryId) {
      postQueryBuilder.andWhere(`posts.countryId = :countryId`, {
        countryId: query.countryId,
      });
    }
    if (query?.cityId) {
      postQueryBuilder.andWhere(`posts.cityId = :cityId`, {
        cityId: query.cityId,
      });
    }
    if (query?.advertisingId) {
      postQueryBuilder.andWhere(
        `posts.advertisingId = :advertisingId OR  posts.advertisingId IS NULL`,
        {
          advertisingId: query.advertisingId,
        },
      );
    }
    if (query?.categoryIds) {
      postQueryBuilder.andWhere(`posts.categoryId IN (:...categoryIds)`, {
        categoryIds: query.categoryIds,
      });
    }
    if (query?.categoryId) {
      postQueryBuilder.andWhere(`posts.categoryId = :categoryId`, {
        categoryId: query.categoryId,
      });
    }
    if (query?.subjectIds) {
      postQueryBuilder.andWhere(`posts.subjectId IN (:...subjectIds)`, {
        subjectIds: query.subjectIds,
      });
    }
    if (query?.subjectId) {
      postQueryBuilder.andWhere(`posts.subjectId = :subjectId`, {
        subjectId: query.subjectId,
      });
    }
    if (query?.excludeIds) {
      postQueryBuilder.andWhere(`posts.id NOT IN (:...excludeIds)`, {
        excludeIds: query.excludeIds,
      });
    }
    if (query?.state) {
      postQueryBuilder.andWhere(`posts.state = :state`, {
        state: query.state,
      });
    }
    if (query?.minDate) {
      postQueryBuilder.andWhere(`posts.publishAt >= :minDate`, {
        minDate: query.minDate,
      });
    }
    if (query?.publisherId) {
      postQueryBuilder.andWhere(`posts.publisherId = :publisherId`, {
        publisherId: query.publisherId,
      });
    }
    if (query?.type) {
      postQueryBuilder.andWhere(`posts.type = :type`, {
        type: query.type,
      });
    }

    if (query?.ids) {
      postQueryBuilder.andWhere(`posts.id IN (:...ids)`, {
        ids: query.ids,
      });
    }
    return postQueryBuilder;
  }

  async combineWithUser(listData: PostEntity[]) {
    const listCreateBy = listData.map((item) => item.createdBy);
    const uniqueListCreateBy =
      removeDuplicateNullUndefinedElementFromArray(listCreateBy);
    try {
      const res = await this.userService.getList({
        subs: uniqueListCreateBy as Array<string>,
        sortOrder: ORDER_BY_ENUM.DESC,
      });
      const users = res?.data || [];
      listData = listData.map((post) => {
        const createBy = post.createdBy;
        const creator = users.find((user) => {
          return user.sub === createBy;
        });
        post.creator = creator;
        return post;
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

  async getById(id: number) {
    const post = await this.postRepo.findOne({
      where: {
        id,
      },
      relations: {
        publisher: true,
        advertisings: true,
        hashtags: true,
        category: true,
        subject: true,
      },
    });
    if (!post)
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    updatePostDto = handleNullValue(updatePostDto);
    updatePostDto = handlePublishAt(updatePostDto);
    if (updatePostDto.state && updatePostDto.state === StateEnum.DECLINE) {
      return this.handleSaveOldValueForPost(id);
    }
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const post = await this.postRepo.findOne({
          where: {
            id,
          },
        });
        if (!post) {
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        }
        const postEntity = {
          ...post,
          ...updatePostDto,
        };
        const { hashtags } = updatePostDto;
        if (hashtags) {
          const hashtagsEntity = await Promise.all(
            hashtags?.map((hashtag) => {
              return this.hashtagsService.create(
                hashtag,
                transactionalEntityManager,
              );
            }) || [],
          );
          postEntity.hashtags = hashtagsEntity;
        }
        await transactionalEntityManager.save(PostEntity, postEntity);
        const postDetail = await transactionalEntityManager.findOne(
          PostEntity,
          {
            relations: {
              publisher: true,
              advertisings: true,
              hashtags: true,
              category: true,
              subject: true,
            },
            where: {
              id,
            },
          },
        );
        return postDetail;
      },
    );
  }

  async handleSaveOldValueForPost(id: number) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const postInHistoricalLogsEntity =
          await transactionalEntityManager.findOne(HistoricalLogsEntity, {
            where: {
              entityId: id,
              action: LOG_ACTION_ENUM.UPDATED,
              entityName: ENTITY_NAME_ENUM.POSTS,
            },
            order: {
              timestamp: 'DESC',
            },
          });
        if (!postInHistoricalLogsEntity?.oldValue)
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        let postOldValue = JSON.parse(postInHistoricalLogsEntity.oldValue);
        if (!postOldValue)
          throw new RpcException({
            code: grpc.status.INVALID_ARGUMENT,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        postOldValue = {
          ...postOldValue,
          state: StateEnum.APPROVED,
        };
        return this.postRepo.save(postOldValue);
      },
    );
  }

  async updateAds(body: UpdatePostAdsGRPCDto) {
    const { id, ...dataUpdate } = body;
    const postDetail = await this.postRepo.findOne({
      where: {
        id,
      },
    });
    if (!postDetail)
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    const postEntity = {
      ...postDetail,
      ...dataUpdate,
      state: StateEnum.APPROVED,
    };
    return this.postRepo.save(postEntity);
  }

  async approvedOrReject(body: UpdatePostApprovedRejectDto) {
    const { ids, state } = body;
    if (state === StateEnum.REJECT || state === StateEnum.APPROVED) {
      let posts = await this.postRepo.findBy({
        id: In(ids),
      });
      if (posts.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      posts = posts.map((post) => {
        post.state = state;
        return post;
      });
      await this.postRepo.save(posts);
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
      const posts = await this.postRepo.findBy({
        id: In(ids),
      });
      if (posts.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      await this.postRepo.delete(ids);
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
          await entityManagerTransaction.delete(PostEntity, id);
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
