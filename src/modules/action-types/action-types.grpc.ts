import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from 'src/common/dto/id.dto';

import { ActionTypesService } from './action-types.service';
import {
  CreateActionTypeDto,
  QueryActionTypeDto,
  UpdateActionTypeGRPCDto,
} from './dto/action-types.dto';

@Controller()
export class ActionTypesServiceGrpc {
  constructor(private readonly service: ActionTypesService) {}

  @GrpcMethod()
  create(body: CreateActionTypeDto) {
    return this.service.create(body);
  }

  @GrpcMethod()
  getList(query: QueryActionTypeDto) {
    return this.service.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.service.getById(idDto.id);
  }

  @GrpcMethod()
  update(body: UpdateActionTypeGRPCDto) {
    const { id, ...dataUpdate } = body;
    return this.service.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.service.delete(idDto.id);
  }
}
