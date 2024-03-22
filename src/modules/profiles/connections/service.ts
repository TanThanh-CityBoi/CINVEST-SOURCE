import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { ConnectionServiceClient } from 'src/proto/types/connections/ConnectionService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { ConnectionDto } from './dto/connection.dto';
import { QueryConnectionDto } from './dto/query.dto';

@Injectable()
export class ConnectionService {
  private service: ConnectionServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<ConnectionServiceClient>(
      ServicesEnum.CONNECTION,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async accept(id: string, response: Response) {
    return this.service.acceptConnection({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryConnectionDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: ConnectionDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: ConnectionDto, response: Response) {
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
