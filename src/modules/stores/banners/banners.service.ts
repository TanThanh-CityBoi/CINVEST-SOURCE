import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import {
  CreateBannerDto,
  QueryBannerDto,
  UpdateBannerDto,
} from './dto/banners.dto';

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

  delete(id: number) {
    return this.bannerGRPCService.delete({ id });
  }
}
