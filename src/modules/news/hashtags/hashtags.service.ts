import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { formatToArray } from 'src/common/utils/array.utils';

import {
  CreateHashtagDto,
  QueryHashtagDto,
  UpdateHashtagDto,
} from './dto/hashtag.dto';

@Injectable()
export class HashtagService {
  private gRPCService;

  constructor(@Inject(ClientEnum.HASHTAGS) private client: ClientGrpc) {}

  onModuleInit() {
    this.gRPCService = this.client.getService(ServicesEnum.HASHTAGS);
  }

  create(body: CreateHashtagDto) {
    return this.gRPCService.create(body);
  }

  getList(query: QueryHashtagDto) {
    query.ids = formatToArray(query.ids);

    return this.gRPCService.getList(query);
  }

  getById(id: number) {
    return this.gRPCService.getById({ id });
  }

  update(id: number, body: UpdateHashtagDto) {
    return this.gRPCService.update({ ...body, id });
  }

  delete(id: number) {
    return this.gRPCService.delete({ id });
  }
}
