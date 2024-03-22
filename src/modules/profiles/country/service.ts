import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { CountryServiceClient } from 'src/proto/types/countries/CountryService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { CountryDto } from './dto/country.dto';
import { QueryCountryDto } from './dto/query.dto';

@Injectable()
export class CountryService {
  private service: CountryServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<CountryServiceClient>(
      ServicesEnum.COUNTRY,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryCountryDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: CountryDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: CountryDto, response: Response) {
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
