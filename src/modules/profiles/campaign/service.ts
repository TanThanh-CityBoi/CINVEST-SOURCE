import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { CampaignServiceClient } from 'src/proto/types/campaigns/CampaignService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { CampaignDto } from './dto/campaign.dto';
import { QueryCampaignDto } from './dto/query.dto';
import { UpdateCampaignDto } from './dto/update.dto';

@Injectable()
export class CampaignService {
  private service: CampaignServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<CampaignServiceClient>(
      ServicesEnum.CAMPAIGN,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryCampaignDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) => {
      return response.send(error ?? res);
    });
  }

  async create(dto: CampaignDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateCampaignDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async count(query: QueryCampaignDto, response: Response) {
    query = mutateQuery(query);

    return this.service.count({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }
}
