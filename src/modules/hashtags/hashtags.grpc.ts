import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from 'src/common/dto/id.dto';

import {
  CreateHashtagDto,
  QueryHashtagDto,
  UpdateHashtagGRPCDto,
} from './dto/hashtag.dto';
import { HashtagsService } from './hashtags.service';

@Controller()
export class HashTagServiceGrpc {
  constructor(private readonly service: HashtagsService) {}

  @GrpcMethod()
  create(body: CreateHashtagDto) {
    return this.service.create(body);
  }

  @GrpcMethod()
  getList(query: QueryHashtagDto) {
    return this.service.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.service.getById(idDto.id);
  }

  @GrpcMethod()
  update(body: UpdateHashtagGRPCDto) {
    const { id, ...dataUpdate } = body;
    return this.service.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.service.delete(idDto.id);
  }
}
