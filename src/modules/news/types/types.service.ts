import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import { CreateTypeDto, QueryTypeDto, UpdateTypeDto } from './dto/types.dto';

@Injectable()
export class TypesService {
  private subjectGRPCService;

  constructor(@Inject(ClientEnum.TYPES) private client: ClientGrpc) {}

  onModuleInit() {
    this.subjectGRPCService = this.client.getService(ServicesEnum.TYPES);
  }

  create(body: CreateTypeDto) {
    return this.subjectGRPCService.create(body);
  }

  getList(query: QueryTypeDto) {
    return this.subjectGRPCService.getList(query);
  }

  getById(id: number) {
    return this.subjectGRPCService.getById({ id });
  }

  update(id: number, body: UpdateTypeDto) {
    return this.subjectGRPCService.update({ ...body, id });
  }

  delete(id: number) {
    return this.subjectGRPCService.delete({ id });
  }
}
