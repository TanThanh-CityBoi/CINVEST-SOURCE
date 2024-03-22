import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as aws from 'aws-sdk';
import {
  AWS_ACCESSKEY_ID,
  AWS_BUCKET_NAME,
  AWS_BUCKET_NAME_PUBLIC,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from 'src/common/constants/constants';
import { TTLEnum } from 'src/common/enums/enums';
import { ApiErrorEnum } from 'src/common/enums/error.enums';
import { BaseAbstractService } from 'src/common/services/base-abstract.service';
import { TPaginationResult } from 'src/common/types';
import { mutateQuery } from 'src/common/utils/mutate.utils';
import { EntityManager, In, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { FileDto } from './dto/file.dto';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService extends BaseAbstractService<FileEntity> {
  constructor(
    @InjectRepository(FileEntity)
    private readonly repository: Repository<FileEntity>,

    private readonly entityManager: EntityManager,
  ) {
    super();
  }

  private readonly s3Service = new aws.S3({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESSKEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  });

  create(dto: any, em?: EntityManager): Promise<FileEntity> {
    throw new Error('Method not implemented.');
  }
  async getList(
    query: any,
  ): Promise<TPaginationResult<FileEntity> | FileEntity[]> {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    if (conditions?.ids?.length > 0) {
      conditions.id = In(conditions.ids);
      delete conditions.ids;
    }
    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        skip,
        take: limit,
        order: {
          [sortBy]: sortOrder,
        },
      });
      return {
        data: data[0],
        totalItems: data[1],
        perPage: limit,
        page: query?.page,
        totalPages: Math.ceil(data[1] / limit),
      };
    } catch (error: any) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }
  async getById(id: number): Promise<FileEntity> {
    const data = await this.repository.findOne({ where: { id } });
    if (!data) throw new NotFoundException(ApiErrorEnum.NOT_FOUND);
    if (!data.isPublic)
      data.url = await this.createPresignedUrl(data.key, TTLEnum.TTL);
    return data;
  }
  async createMultiple(
    dto: FileDto[],
    em?: EntityManager,
  ): Promise<FileEntity[]> {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction((trx) => {
        return trx.save(trx.create(FileEntity, dto));
      });
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }
  update(id: number, dto: any, em?: EntityManager): Promise<FileEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async uploadPublicFile(dataBuffers: any[], folder: string) {
    try {
      const result = await this.commonUploadFile(
        dataBuffers,
        folder,
        AWS_BUCKET_NAME_PUBLIC,
        true,
      );

      return await this.createMultiple(result);
    } catch (error) {
      Logger.debug(error);
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }

  async uploadPrivateFile(dataBuffers: any[], folder: string) {
    try {
      const result = await this.commonUploadFile(
        dataBuffers,
        folder,
        AWS_BUCKET_NAME,
        false,
      );

      return await this.createMultiple(result);
    } catch (error) {
      Logger.debug(error);
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createPresignedUrl(Key: string, ttl: number) {
    return this.s3Service.getSignedUrl(`getObject`, {
      Bucket: AWS_BUCKET_NAME,
      Key: Key,
      Expires: ttl,
    });
  }

  private async commonUploadFile(
    dataBuffers: any[],
    folder: string,
    bucketAWS: string,
    isPublic: boolean,
  ) {
    const uploadResult = await Promise.all([
      ...dataBuffers?.map(async (dataBuffer) => {
        const fileData = {
          Bucket: bucketAWS,
          Body: dataBuffer.buffer,
          Key: `${folder}/${uuid()}`,
          ContentType: dataBuffer.mimetype,
        };

        const uploadedFile = await this.s3Service.upload(fileData).promise();

        return {
          ...uploadedFile,
          size: dataBuffer.size,
          mimetype: dataBuffer.mimetype,
        };
      }),
    ]);

    return uploadResult.map((item) => {
      return {
        url: item.Location as string,
        key: item.Key as string,
        size: item.size as string,
        mimetype: item.mimetype as string,
        isPublic: isPublic,
      };
    });
  }
}
