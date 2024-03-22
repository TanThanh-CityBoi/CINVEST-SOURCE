import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import {
  CreateAdvertisingDto,
  QueryAdvertisingDto,
  UpdateAdvertisingDto,
} from './dto/advertisings.dto';

@Injectable()
export class AdvertisingsService {
  private subjectGRPCService;

  constructor(@Inject(ClientEnum.ADVERTISING) private client: ClientGrpc) {}

  onModuleInit() {
    this.subjectGRPCService = this.client.getService(ServicesEnum.ADVERTISING);
  }

  create(body: CreateAdvertisingDto) {
    return this.subjectGRPCService.create(body);
  }

  getList(query: QueryAdvertisingDto) {
    return this.subjectGRPCService.getList(query);
  }

  getById(id: number) {
    return this.subjectGRPCService.getById({ id });
  }

  update(id: number, body: UpdateAdvertisingDto) {
    return this.subjectGRPCService.update({ ...body, id });
  }

  delete(id: number) {
    return this.subjectGRPCService.delete({ id });
  }
}
