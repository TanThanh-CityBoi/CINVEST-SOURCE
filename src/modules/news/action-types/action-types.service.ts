import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { QueryAcquisitionDto } from 'src/modules/profiles/acquisitions/dto/query.dto';

import {
  CreateActionTypeDto,
  UpdateActionTypeDto,
} from './dto/action-types.dto';

@Injectable()
export class ActionTypesService {
  private subjectGRPCService;

  constructor(@Inject(ClientEnum.ACTION_TYPES) private client: ClientGrpc) {}

  onModuleInit() {
    this.subjectGRPCService = this.client.getService(ServicesEnum.ACTION_TYPES);
  }

  create(body: CreateActionTypeDto) {
    return this.subjectGRPCService.create(body);
  }

  getList(query: QueryAcquisitionDto) {
    return this.subjectGRPCService.getList(query);
  }

  getById(id: number) {
    return this.subjectGRPCService.getById({ id });
  }

  update(id: number, body: UpdateActionTypeDto) {
    return this.subjectGRPCService.update({ ...body, id });
  }

  delete(id: number) {
    return this.subjectGRPCService.delete({ id });
  }
}
