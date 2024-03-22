import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { FundingRoundServiceClient } from 'src/proto/types/fundingRounds/FundingRoundService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { FundingRoundDto } from './dto/fundingRound.dto';
import { QueryFundingRoundDto } from './dto/query.dto';
import { UpdateFundingRoundDto } from './dto/update-funding-round.dto';

@Injectable()
export class FundingRoundService {
  private service: FundingRoundServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<FundingRoundServiceClient>(
      ServicesEnum.FUNDING,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryFundingRoundDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: FundingRoundDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateFundingRoundDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async deleteInvestor(id: number, investorId: number, response: Response) {
    return this.service.deleteInvestor(
      { id: +id, investorId: +investorId },
      (error, res) => response.send(error ?? res),
    );
  }
}
