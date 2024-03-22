import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { StatisticServiceClient } from 'src/proto/types/statistic/StatisticService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { StatisticGetRequest } from './dto/query.dto';

@Injectable()
export class StatisticService {
  private service: StatisticServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<StatisticServiceClient>(
      ServicesEnum.STATISTIC,
    );
  }

  async getList(query: StatisticGetRequest, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) => {
      return response.send(error ?? res);
    });
  }
}
