import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { Repository } from 'typeorm';
import {
  CreateAdvertisingDto,
  QueryAdvertisingDto,
  UpdateAdvertisingDto,
} from './dto/advertisings.dto';
import { AdvertisingEntity } from './entities/advertisings.entity';

@Injectable()
export class AdvertisingService extends BaseAbstractService<AdvertisingEntity> {
  constructor(
    @InjectRepository(AdvertisingEntity)
    private readonly advertisingRepo: Repository<AdvertisingEntity>,
  ) {
    super();
  }

  create(body: CreateAdvertisingDto) {
    return this.advertisingRepo.save(body);
  }

  async getList(query: QueryAdvertisingDto) {
    Logger.debug(query);
    const advertisingQueryBuilder =
      this.advertisingRepo.createQueryBuilder('advertisings');
    if (query?.name) {
      advertisingQueryBuilder.andWhere(`advertisings.name like :name`, {
        name: `%${query.name}%`,
      });
    }
    if (query?.type) {
      advertisingQueryBuilder.andWhere(`advertisings.type = :type`, {
        type: query.type,
      });
    }
    const listdata = await advertisingQueryBuilder.getMany();
    return {
      data: listdata,
    };
  }

  async getById(id: number) {
    return this.advertisingRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateSubjectDto: UpdateAdvertisingDto) {
    await this.advertisingRepo.update(id, updateSubjectDto);
    return this.getById(id);
  }

  async delete(id: number): Promise<any> {
    try {
      await this.advertisingRepo.delete(id);
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
