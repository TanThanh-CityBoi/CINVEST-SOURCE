import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { mutateQuery } from 'src/utils/mutateQuery';

import { QueryArchiveRecordDto } from './dto/query.dto';

@Injectable()
export class ArchiveRecordService {
  private service;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService(ServicesEnum.ARCHIVE_RECORD);
  }

  async getList(email, query: QueryArchiveRecordDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query, email }, (error, res) =>
      response.send(error ?? res),
    );
  }
}
