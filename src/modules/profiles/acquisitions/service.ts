import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { AcquisitionServiceClient } from 'src/proto/types/acquisitions/AcquisitionService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { AcquisitionDto } from './dto/acquisition.dto';
import { QueryAcquisitionDto } from './dto/query.dto';
import { UpdateAcquisitionDto } from './dto/update-acquisition.dto';

@Injectable()
export class AcquisitionService {
  private service: AcquisitionServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<AcquisitionServiceClient>(
      ServicesEnum.ACQUISITION,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryAcquisitionDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: AcquisitionDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateAcquisitionDto, response: Response) {
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
