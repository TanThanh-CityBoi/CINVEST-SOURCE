import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from 'src/common/dto/id.dto';

import {
  CreateTypeDto,
  QueryTypeDto,
  UpdateTypeGRPCDto,
} from './dto/types.dto';
import { TypesService } from './types.service';

@Controller()
export class TypesServiceGrpc {
  constructor(private readonly service: TypesService) {}

  @GrpcMethod()
  create(body: CreateTypeDto) {
    return this.service.create(body);
  }

  @GrpcMethod()
  getList(query: QueryTypeDto) {
    return this.service.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.service.getById(idDto.id);
  }

  @GrpcMethod()
  update(body: UpdateTypeGRPCDto) {
    const { id, ...dataUpdate } = body;
    return this.service.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.service.delete(idDto.id);
  }
}
