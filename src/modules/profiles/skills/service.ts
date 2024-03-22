import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { SkillServiceClient } from 'src/proto/types/skills/SkillService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { QuerySkillDto } from './dto/query.dto';
import { SkillDto } from './dto/skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {
  private service: SkillServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<SkillServiceClient>(
      ServicesEnum.SKILL,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QuerySkillDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: SkillDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) => {
      if (error) {
        response.status(404).json(error);
      }
      response.send(res);
    });
  }

  async update(dto: UpdateSkillDto, response: Response) {
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
