import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { ProfileServiceClient } from 'src/proto/types/profiles/ProfileService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { ProfileDto } from './dto/profile.dto';
import { QueryProfileDto } from './dto/query.dto';
import { UpdateProfileDto } from './dto/update.dto';

@Injectable()
export class ProfileService {
  private service: ProfileServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<ProfileServiceClient>(
      ServicesEnum.PROFILE,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryProfileDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: ProfileDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateProfileDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async count(query: QueryProfileDto, response: Response) {
    query = mutateQuery(query);

    return this.service.count({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }
}
