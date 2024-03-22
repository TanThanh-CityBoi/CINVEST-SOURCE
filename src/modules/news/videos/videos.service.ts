import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import { QueryVideoDto } from './dto/query.dto';
import { UpdateAdsVideoDto, UpdateVideoDto } from './dto/update.dto';
import { CreateVideoDto } from './dto/video.dto';

@Injectable()
export class VideosService {
  private videoGRPCService;

  constructor(@Inject(ClientEnum.VIDEOS) private client: ClientGrpc) {}

  onModuleInit() {
    this.videoGRPCService = this.client.getService(ServicesEnum.VIDEOS);
  }

  create(body: CreateVideoDto) {
    Logger.debug(JSON.stringify(body));

    return this.videoGRPCService.create(body);
  }

  getList(query: QueryVideoDto) {
    return this.videoGRPCService.getList(query);
  }

  getById(id: number) {
    return this.videoGRPCService.getById({ id });
  }

  update(id: number, dataUpdate: UpdateVideoDto) {
    return this.videoGRPCService.update({ id, ...dataUpdate });
  }

  updateAds(body: UpdateAdsVideoDto) {
    return this.videoGRPCService.updateAds(body);
  }

  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.videoGRPCService.approvedOrReject(body);
  }

  deleteMultiple(query: IdsDto) {
    return this.videoGRPCService.deleteMultiple(query);
  }

  delete(id: number) {
    return this.videoGRPCService.delete({ id });
  }
}
