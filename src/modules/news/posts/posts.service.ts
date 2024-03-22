import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IdsDto } from 'src/common/dto/id.dto';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';

import { CreatePostDto } from './dto/post.dto';
import { QueryPostDto } from './dto/query.dto';
import {
  UpdatePostAdsGRPCDto,
  UpdatePostApprovedRejectDto,
  UpdatePostDto,
} from './dto/update.dto';

@Injectable()
export class PostsService {
  private postsGRPCService;

  constructor(@Inject(ClientEnum.POSTS) private client: ClientGrpc) {}

  onModuleInit() {
    this.postsGRPCService = this.client.getService(ServicesEnum.POSTS);
  }

  create(createPostDto: CreatePostDto) {
    return this.postsGRPCService.create(createPostDto);
  }

  getList(query: QueryPostDto) {
    return this.postsGRPCService.getList(query);
  }

  getById(id: number) {
    return this.postsGRPCService.getById({ id });
  }

  update(id: number, dataUpdate: UpdatePostDto) {
    return this.postsGRPCService.update({ id, dataUpdate });
  }

  updateAds(body: UpdatePostAdsGRPCDto) {
    return this.postsGRPCService.updateAds(body);
  }

  approvedOrReject(body: UpdatePostApprovedRejectDto) {
    return this.postsGRPCService.approvedOrReject(body);
  }

  deleteMultiple(query: IdsDto) {
    return this.postsGRPCService.deleteMultiple(query);
  }

  delete(id: number) {
    return this.postsGRPCService.delete({ id });
  }
}
