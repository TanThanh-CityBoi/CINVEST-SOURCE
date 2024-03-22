import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IdDto, IdsDto } from 'src/common/dto/id.dto';
import {
  CreatePostDto,
  QueryPostDto,
  UpdatePostAdsGRPCDto,
  UpdatePostApprovedRejectDto,
  UpdatePostGRPCDto,
} from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller()
export class PostsServiceGRPC {
  constructor(private readonly postsService: PostsService) {}

  @GrpcMethod()
  create(body: CreatePostDto) {
    return this.postsService.create(body);
  }

  @GrpcMethod()
  getList(query: QueryPostDto) {
    Logger.debug(JSON.stringify(query));
    return this.postsService.getList(query);
  }

  @GrpcMethod()
  getById(idDto: IdDto) {
    Logger.debug(JSON.stringify(idDto));
    return this.postsService.getById(idDto.id);
  }

  @GrpcMethod()
  update(body: UpdatePostGRPCDto) {
    Logger.debug(JSON.stringify(body));
    const { id, dataUpdate } = body;
    return this.postsService.update(id, dataUpdate);
  }

  @GrpcMethod()
  updateAds(body: UpdatePostAdsGRPCDto) {
    return this.postsService.updateAds(body);
  }

  @GrpcMethod()
  approvedOrReject(body: UpdatePostApprovedRejectDto) {
    return this.postsService.approvedOrReject(body);
  }

  @GrpcMethod()
  deleteMultiple(query: IdsDto) {
    return this.postsService.deleteMultiple(query.ids);
  }

  @GrpcMethod()
  delete(idDto: IdDto) {
    return this.postsService.delete(idDto.id);
  }
}
