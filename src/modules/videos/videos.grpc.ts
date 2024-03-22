import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdDto, IdsDto } from 'src/common/dto/id.dto';
import {
  CreateVideoDto,
  QueryVideoDto,
  UpdateAdsVideo,
  UpdateVideoGRPCDto,
} from './dto/video.dto';
import { VideoService } from './videos.service';

@Controller()
export class VideosServiceGRPC {
  constructor(private readonly videoService: VideoService) {}

  @GrpcMethod()
  create(body: CreateVideoDto) {
    Logger.debug(JSON.stringify(body));
    return this.videoService.create(body);
  }

  @GrpcMethod()
  getList(query: QueryVideoDto) {
    Logger.debug(JSON.stringify(query));
    return this.videoService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    Logger.debug(JSON.stringify(idDto));
    return this.videoService.getById(idDto.id);
  }

  @GrpcMethod()
  updateAds(body: UpdateAdsVideo) {
    return this.videoService.updateAds(body);
  }

  @GrpcMethod()
  update(body: UpdateVideoGRPCDto) {
    Logger.debug(JSON.stringify(body));
    const { id, ...dataUpdate } = body;
    return this.videoService.update(id, dataUpdate);
  }

  @GrpcMethod()
  approvedOrReject(body: BaseApprovedRejectDto) {
    return this.videoService.approvedOrReject(body);
  }

  @GrpcMethod()
  deleteMultiple(query: IdsDto) {
    return this.videoService.deleteMultiple(query.ids);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.videoService.delete(idDto.id);
  }
}
