import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import {
  CreateSubjectDto,
  QuerySubjectDto,
  UpdateSubjectDto,
} from './dto/subject.dto';

@Injectable()
export class SubjectsService {
  private subjectGRPCService;

  constructor(@Inject(ClientEnum.SUBJECTS) private client: ClientGrpc) {}

  onModuleInit() {
    this.subjectGRPCService = this.client.getService(ServicesEnum.SUBJECTS);
  }

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectGRPCService.create(createSubjectDto);
  }

  getList(query: QuerySubjectDto) {
    return this.subjectGRPCService.getList(query);
  }

  getById(id: number) {
    return this.subjectGRPCService.getById({ id });
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectGRPCService.update({ ...updateSubjectDto, id });
  }

  delete(id: number) {
    return this.subjectGRPCService.delete({ id });
  }
}
