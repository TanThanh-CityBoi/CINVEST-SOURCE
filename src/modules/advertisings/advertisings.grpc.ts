import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto } from 'src/common/dto/id.dto';
import { AdvertisingService } from './advertisings.service';
import {
  CreateAdvertisingDto,
  QueryAdvertisingDto,
  UpdateAdvertisingGRPCDto,
} from './dto/advertisings.dto';

@Controller()
export class AdvertisingServiceGrpc {
  constructor(private readonly advertisingService: AdvertisingService) {}

  @GrpcMethod()
  create(body: CreateAdvertisingDto) {
    return this.advertisingService.create(body);
  }

  @GrpcMethod()
  getList(query: QueryAdvertisingDto) {
    return this.advertisingService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    return this.advertisingService.getById(idDto.id);
  }

  @GrpcMethod()
  update(body: UpdateAdvertisingGRPCDto) {
    const { id, ...dataUpdate } = body;
    return this.advertisingService.update(id, dataUpdate);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.advertisingService.delete(idDto.id);
  }
}
