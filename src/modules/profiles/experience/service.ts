import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { ExperienceServiceClient } from 'src/proto/types/experiences/ExperienceService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { ExperienceDto } from './dto/experience.dto';
import { QueryExperienceDto } from './dto/query.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperienceService {
  private service: ExperienceServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<ExperienceServiceClient>(
      ServicesEnum.EXPERIENCE,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryExperienceDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: ExperienceDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateExperienceDto, response: Response) {
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
