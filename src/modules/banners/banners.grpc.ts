import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdDto, IdsDto } from 'src/common/dto/id.dto';
import { BannersService } from './banners.service';
import {
  CreateBannerDto,
  QueryBannerDto,
  UpdateBannerAdsDto,
  UpdateBannerGRPCDto,
} from './dto/banners.dto';

@Controller()
export class BannersServiceGRPC {
  constructor(private readonly bannersService: BannersService) {}

  @GrpcMethod()
  create(body: CreateBannerDto) {
    Logger.debug(JSON.stringify(body));
    return this.bannersService.create(body);
  }

  @GrpcMethod()
  getList(query: QueryBannerDto) {
    Logger.debug(JSON.stringify(query));
    return this.bannersService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    Logger.debug(JSON.stringify(idDto));
    return this.bannersService.getById(idDto.id);
  }

  @GrpcMethod()
  updateAds(body: UpdateBannerAdsDto) {
    return this.bannersService.updateAds(body);
  }

  @GrpcMethod()
  update(body: UpdateBannerGRPCDto) {
    Logger.debug(JSON.stringify(body));
    const { id, dataUpdate } = body;
    return this.bannersService.update(id, dataUpdate);
  }

  @GrpcMethod()
  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.bannersService.approvedOrReject(body);
  }

  @GrpcMethod()
  deleteMultiple(query: IdsDto) {
    return this.bannersService.deleteMultiple(query.ids);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.bannersService.delete(idDto.id);
  }
}
