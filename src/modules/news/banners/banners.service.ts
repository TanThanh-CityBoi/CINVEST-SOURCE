import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import { CreateBannerDto } from './dto/banners.dto';
import { QueryBannerDto } from './dto/query.dto';
import { UpdateBannerAdsDto, UpdateBannerDto } from './dto/update.dto';

@Injectable()
export class BannerService {
  private bannerGRPCService;

  constructor(@Inject(ClientEnum.BANNERS) private client: ClientGrpc) {}

  onModuleInit() {
    this.bannerGRPCService = this.client.getService(ServicesEnum.BANNERS);
  }

  create(body: CreateBannerDto) {
    Logger.debug(JSON.stringify(body));

    return this.bannerGRPCService.create(body);
  }

  getList(query: QueryBannerDto) {
    return this.bannerGRPCService.getList(query);
  }

  getById(id: number) {
    return this.bannerGRPCService.getById({ id });
  }

  update(id: number, dataUpdate: UpdateBannerDto) {
    Logger.debug(JSON.stringify({ id, dataUpdate }));

    return this.bannerGRPCService.update({ id, dataUpdate });
  }

  updateAds(body: UpdateBannerAdsDto) {
    return this.bannerGRPCService.updateAds(body);
  }

  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.bannerGRPCService.approvedOrReject(body);
  }

  deleteMultiple(query: IdsDto) {
    return this.bannerGRPCService.deleteMultiple(query);
  }

  delete(id: number) {
    return this.bannerGRPCService.delete({ id });
  }
}
