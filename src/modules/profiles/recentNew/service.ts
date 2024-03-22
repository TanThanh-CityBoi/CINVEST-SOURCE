import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { RecentNewServiceClient } from 'src/proto/types/recentNews/RecentNewService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { QueryRecentNewDto } from './dto/query.dto';
import { RecentNewDto } from './dto/recentNew.dto';
import { UpdateRecentNewDto } from './dto/update-recent-new.dto';

@Injectable()
export class RecentNewService {
  private service: RecentNewServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<RecentNewServiceClient>(
      ServicesEnum.RECENT_NEW,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryRecentNewDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: RecentNewDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateRecentNewDto, response: Response) {
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
