import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdDto, IdsDto } from 'src/common/dto/id.dto';
import {
  CreatePublisherDto,
  DeletePublisherDto,
  QueryPublisherDto,
  UpdatePublisherGRPCReqDto,
} from './dto/publisher.dto';
import { PublishersService } from './publishers.service';

@Controller()
export class PublisherServiceGrpc {
  constructor(private readonly publishersService: PublishersService) {}

  @GrpcMethod()
  create(createPublisherDto: CreatePublisherDto) {
    return this.publishersService.create(createPublisherDto);
  }

  @GrpcMethod()
  getList(queryPublisherDto: QueryPublisherDto) {
    Logger.debug(JSON.stringify(queryPublisherDto));
    return this.publishersService.getList(queryPublisherDto);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    Logger.debug(JSON.stringify(idDto));
    return this.publishersService.getById(idDto.id);
  }

  @GrpcMethod()
  update(updatePublisherGRPCReqDto: UpdatePublisherGRPCReqDto) {
    const { id, ...dataUpdated } = updatePublisherGRPCReqDto;
    return this.publishersService.update(id, dataUpdated);
  }

  @GrpcMethod()
  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.publishersService.approvedOrReject(body);
  }

  @GrpcMethod()
  deleteMultiple(query: IdsDto) {
    return this.publishersService.deleteMultiple(query.ids);
  }

  @GrpcMethod()
  delete(deletePublisherDto: DeletePublisherDto) {
    return this.publishersService.delete(deletePublisherDto.id);
  }
}
