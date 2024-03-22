import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import { CreatePublisherDto } from './dto/publisher.dto';
import { QueryPublisherDto } from './dto/query.dto';
import { UpdatePublisherDto } from './dto/update.dto';

@Injectable()
export class PublishersService {
  private publishersGRPCService;

  constructor(@Inject(ClientEnum.PUBLISHER) private client: ClientGrpc) {}

  onModuleInit() {
    this.publishersGRPCService = this.client.getService(ServicesEnum.PUBLISHER);
  }

  create(createPublisherDto: CreatePublisherDto) {
    return this.publishersGRPCService.create(createPublisherDto);
  }

  getList(query: QueryPublisherDto) {
    return this.publishersGRPCService.getList(query);
  }

  getById(id: number) {
    return this.publishersGRPCService.getById({ id });
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return this.publishersGRPCService.update({ ...updatePublisherDto, id });
  }

  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.publishersGRPCService.approvedOrReject(body);
  }

  deleteMultiple(query: IdsDto) {
    return this.publishersGRPCService.deleteMultiple(query);
  }

  delete(id: number) {
    return this.publishersGRPCService.delete({ id });
  }
}
