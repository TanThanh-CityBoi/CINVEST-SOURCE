import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as grpc from 'grpc';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { ERROR_MESSAGES } from 'src/common/enums/error-message.enums';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { handleNullValue } from 'src/common/utils/handle-null-value.utils';
import { handlePublishAt } from 'src/common/utils/handle-publishAt.utils';
import { mutateQueryPagination } from 'src/common/utils/mutate.utils';
import { EntityManager, In, Repository, SelectQueryBuilder } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { HistoricalLogsEntity } from '../databases/subscribers/entity/historical-logs.entity';
import { LOG_ACTION_ENUM } from '../databases/subscribers/enums/log-actions.enum';
import { SubjectsService } from '../subjects/subjects.service';
import { ENTITY_NAME_ENUM } from './../../common/enums/entities.enums';
import {
  CreateBannerDto,
  QueryBannerDto,
  UpdateBannerAdsDto,
  UpdateBannerDto,
} from './dto/banners.dto';
import { BannerEntity } from './entities/banners.entity';

@Injectable()
export class BannersService extends BaseAbstractService<BannerEntity> {
  constructor(
    @InjectRepository(BannerEntity)
    private readonly bannerRepo: Repository<BannerEntity>,
    private readonly entityManager: EntityManager,
    private readonly categoriesService: CategoriesService,
    private readonly subjectsService: SubjectsService,
  ) {
    super();
  }
  async create(body: CreateBannerDto) {
    const { categoryIds, subjectIds } = body;
    const bannerEntity = { ...body };
    if (categoryIds) {
      const categoriesEntity =
        await this.categoriesService.getByIds(categoryIds);
      bannerEntity['categories'] = categoriesEntity;
    }
    if (subjectIds) {
      const subjectsEntity = await this.subjectsService.getByIds(subjectIds);
      bannerEntity['subjects'] = subjectsEntity;
    }
    return this.bannerRepo.save(bannerEntity);
  }

  async generateBannerQueryBuilder() {
    return this.bannerRepo
      .createQueryBuilder('banners')
      .leftJoinAndSelect('banners.advertisings', 'advertisings')
      .leftJoinAndSelect('banners.categories', 'categories')
      .leftJoinAndSelect('banners.subjects', 'subjects')
      .leftJoinAndSelect('banners.types', 'types')
      .leftJoinAndSelect('banners.actionTypes', 'actionTypes');
  }

  async handleFilter(
    bannerQueryBuilder: SelectQueryBuilder<BannerEntity>,
    query: QueryBannerDto,
  ) {
    // where condition
    if (query.name) {
      bannerQueryBuilder.andWhere(`banners.name like :name`, {
        name: `%${query.name}%`,
      });
    }
    if (query.subjectIds) {
      bannerQueryBuilder.andWhere(`subjects.id IN (:...subjectIds)`, {
        subjectIds: query.subjectIds,
      });
    }
    if (query.categoryIds) {
      bannerQueryBuilder.andWhere(`categories.id IN (:...categoryIds)`, {
        categoryIds: query.categoryIds,
      });
    }
    if (query.state) {
      bannerQueryBuilder.andWhere(`banners.state = :state`, {
        state: query.state,
      });
    }
    if (query.typeServices) {
      bannerQueryBuilder.andWhere(`banners.typeServices = :typeServices`, {
        typeServices: query.typeServices,
      });
    }
    if (query.actionTypeId) {
      bannerQueryBuilder.andWhere(`banners.actionTypeId = :actionTypeId`, {
        actionTypeId: query.actionTypeId,
      });
    }
    if (query.advertisingId) {
      bannerQueryBuilder.andWhere(`banners.advertisingId = :advertisingId`, {
        advertisingId: query.advertisingId,
      });
    }
    return bannerQueryBuilder;
  }

  async getList(query: QueryBannerDto) {
    const { limit, skip, sortBy, sortOrder, page } =
      mutateQueryPagination(query);
    let bannerQueryBuilder = await this.generateBannerQueryBuilder();
    bannerQueryBuilder = await this.handleFilter(bannerQueryBuilder, query);
    bannerQueryBuilder.skip(skip);
    bannerQueryBuilder.take(limit);
    const orderByObj = {};
    if (query.isPriorityAdvertising === YES_NO_ENUM.YES)
      orderByObj['banners.advertisingId'] = 'DESC';
    bannerQueryBuilder.orderBy({
      ...orderByObj,
      [`banners.${sortBy}`]: sortOrder,
    });
    const [listData, countTotalItem] =
      await bannerQueryBuilder.getManyAndCount();
    return {
      data: listData,
      totalItems: countTotalItem,
      perPage: limit,
      totalPages: Math.ceil(countTotalItem / limit),
      page,
    };
  }

  async getById(id: number) {
    const banner = await this.bannerRepo.findOne({
      where: {
        id,
      },
      relations: {
        advertisings: true,
        categories: true,
        subjects: true,
        types: true,
        actionTypes: true,
      },
    });
    if (!banner)
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    return banner;
  }

  async update(id: number, body: UpdateBannerDto) {
    body = handleNullValue(body);
    body = handlePublishAt(body);
    if (body.state && body.state === StateEnum.DECLINE) {
      return this.handleSaveOldValueForBanner(id);
    }
    const { categoryIds, subjectIds } = body;
    const bannerEntity = { ...body };
    if (categoryIds) {
      const categoriesEntity =
        await this.categoriesService.getByIds(categoryIds);
      bannerEntity['categories'] = categoriesEntity;
    }
    if (subjectIds) {
      const subjectsEntity = await this.subjectsService.getByIds(subjectIds);
      bannerEntity['subjects'] = subjectsEntity;
    }
    await this.bannerRepo.save({ id, ...bannerEntity });
    return this.getById(id);
  }

  async handleSaveOldValueForBanner(id: number) {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        const bannerInHistoricalLogsEntity =
          await transactionalEntityManager.findOne(HistoricalLogsEntity, {
            where: {
              entityId: id,
              action: LOG_ACTION_ENUM.UPDATED,
              entityName: ENTITY_NAME_ENUM.BANNER,
            },
            order: {
              timestamp: 'DESC',
            },
          });
        if (!bannerInHistoricalLogsEntity?.oldValue)
          throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        let bannerOldValue = JSON.parse(bannerInHistoricalLogsEntity.oldValue);
        if (!bannerOldValue)
          throw new RpcException({
            code: grpc.status.INVALID_ARGUMENT,
            message: ERROR_MESSAGES.NOT_FOUND,
          });
        bannerOldValue = {
          ...bannerOldValue,
          state: StateEnum.APPROVED,
        };
        return this.bannerRepo.save(bannerOldValue);
      },
    );
  }

  async updateAds(body: UpdateBannerAdsDto) {
    const { id, ...dataUpdate } = body;
    const bannerDetail = await this.bannerRepo.findOne({
      where: {
        id,
      },
    });
    if (!bannerDetail)
      throw new RpcException({
        code: grpc.status.NOT_FOUND,
        message: ERROR_MESSAGES.NOT_FOUND,
      });
    const bannerEntity = {
      ...bannerDetail,
      ...dataUpdate,
      state: StateEnum.APPROVED,
    };
    return this.bannerRepo.save(bannerEntity);
  }

  async approvedOrReject(body: BaseApprovedRejectDto) {
    const { ids, state } = body;
    if (state === StateEnum.REJECT || state === StateEnum.APPROVED) {
      let banners = await this.bannerRepo.findBy({
        id: In(ids),
      });
      if (banners.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      banners = banners.map((banner) => {
        banner.state = state;
        return banner;
      });
      await this.bannerRepo.save(banners);
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
      const banners = await this.bannerRepo.findBy({
        id: In(ids),
      });
      if (banners.length !== ids.length) {
        throw new RpcException({
          code: grpc.status.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND,
        });
      }
      await this.bannerRepo.delete(ids);
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
      await this.bannerRepo.delete(id);
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
