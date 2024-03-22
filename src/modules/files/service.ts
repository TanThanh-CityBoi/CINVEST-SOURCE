import { EntityManager } from 'typeorm';

import { BaseAbstractService } from '../../services/baseAbstract.service';
import { ApiErrorCode, ApiErrorEnum } from '../../types/apiErrors';
import { TTL_PRESIGNED } from '../../utils/constants';
import { ErrorNotFound, HttpError } from '../../utils/error';
import { S3Service } from '../s3/service';
import { FileEntity } from './entities/file.entity';
import { TFile } from './types';

export class FileService extends BaseAbstractService<FileEntity> {
  constructor() {
    super(FileEntity);
  }

  private readonly s3Service = new S3Service();
  getList(query?: any, em?: EntityManager | undefined): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getById(id: number): Promise<any> {
    const file = await this.repository.findOne({ where: { id } });
    if (!file) throw new ErrorNotFound();
    file.url = await this.s3Service.createPresignedUrl(
      'get',
      file.key,
      +TTL_PRESIGNED,
    );

    return file;
  }

  async create(dto: TFile[], em?: EntityManager | undefined): Promise<any> {
    try {
      dto.map(async (item) => {
        const { file, Key } = item;
        const params = item?.params || {
          ACL: 'public-read',
        };
        const res = await this.s3Service.uploadFile(file, Key, params);
        const newFile = this.repository.create({
          key: Key,
          url: res.Location,
        });
        await this.repository.save(newFile);
      });
    } catch (error) {
      throw new HttpError(ApiErrorCode.BAD_REQUEST, ApiErrorEnum.BAD_REQUEST);
    }
  }

  update(id: number, dto: any, em?: EntityManager | undefined): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<any> {
    const file = await this.repository.findOne({
      where: {
        id,
      },
    });
    if (!file) throw new ErrorNotFound();
    return await Promise.all([
      this.s3Service.deleteObject(file.key),
      this.repository.delete(file.id),
    ]);
  }
}
