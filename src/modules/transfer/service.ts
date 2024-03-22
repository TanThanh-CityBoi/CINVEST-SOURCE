import { EntityManager } from 'typeorm';

import { grpcErrorNotFound } from '../../common/grpcError/errors';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { ApiErrorEnum } from '../../types/apiErrors';
import { HttpError } from '../../utils/error';
import { TransferEntity } from './entities/transfer.entity';
import { TTransfer } from './type';
import { relations } from './utils';

export class TransferService extends BaseAbstractService<TransferEntity> {
  constructor() {
    super(TransferEntity);
  }

  async getList(query?: any, em?: EntityManager | undefined): Promise<any> {
    return;
  }

  async getById(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      relations,
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async create(dto: TTransfer, em?: EntityManager) {
    if (em) {
      return await em.save(em.create(TransferEntity, { ...dto }));
    } else {
      const data = await this.repository.create({ ...dto });
      if (!data) throw new HttpError(400, ApiErrorEnum.BAD_REQUEST);
      return await this.repository.save(data);
    }
  }

  async update(id: number, dto: TTransfer, em?: EntityManager) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: DeepPartial<TransferEntity> = Object.assign(data, dto);
    if (em) {
      return await em.save(TransferEntity, { ...dto });
    } else {
      return await this.repository.save({ ...dto });
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    return await this.repository.delete(data.id);
  }
}
