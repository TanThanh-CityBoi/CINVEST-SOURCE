import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from 'src/common/dto/id.dto';
import {
  CreateSubjectDto,
  QuerySubjectDto,
  UpdateSubjectGRPCDto,
} from './dto/subject.dto';
import { SubjectsService } from './subjects.service';

@Controller()
export class SubjectsServiceGrpc {
  constructor(private readonly subjectsService: SubjectsService) {}

  @GrpcMethod()
  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @GrpcMethod()
  getList(query: QuerySubjectDto) {
    Logger.debug(JSON.stringify(query));
    return this.subjectsService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.subjectsService.getById(idDto.id);
  }

  @GrpcMethod()
  update(updateSubjectGRPCDto: UpdateSubjectGRPCDto) {
    const { id, ...dataUpdate } = updateSubjectGRPCDto;
    return this.subjectsService.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.subjectsService.delete(idDto.id);
  }
}
