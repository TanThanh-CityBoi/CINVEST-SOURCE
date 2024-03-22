import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { IpoStockServiceClient } from 'src/proto/types/ipoStocks/IpoStockService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { IpoStockDto } from './dto/ipoStock.dto';
import { QueryIpoStockDto } from './dto/query.dto';
import { UpdateIpoStockDto } from './dto/update.dto';

@Injectable()
export class IpoStockService {
  private service: IpoStockServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<IpoStockServiceClient>(
      ServicesEnum.IPOSTOCK,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryIpoStockDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: IpoStockDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateIpoStockDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }
}
