import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { CompanyServiceClient } from 'src/proto/types/companies/CompanyService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { CompanyDto } from './dto/company';
import { QueryCompanyDto } from './dto/query.dto';
import { UpdateCompanyDto } from './dto/update.dto';

@Injectable()
export class CompanyService {
  private service: CompanyServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<CompanyServiceClient>(
      ServicesEnum.COMPANY,
    );
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryCompanyDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: CompanyDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async update(dto: UpdateCompanyDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async count(query: QueryCompanyDto, response: Response) {
    query = mutateQuery(query);

    return this.service.count({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }
}
