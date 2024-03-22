import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard, CognitoUser } from '@nestjs-cognito/auth';
import { IdsDto } from 'src/common/dto/id.dto';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { formatToArray } from 'src/common/utils/array.utils';

import { CreatePostDto } from './dto/post.dto';
import { QueryPostDto } from './dto/query.dto';
import {
  UpdatePostAdsGRPCDto,
  UpdatePostApprovedRejectDto,
  UpdatePostDto,
} from './dto/update.dto';
import { PostsService } from './posts.service';

@Controller(CONTROLLER_ENUM.POSTS)
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @CognitoUser('sub') sub: string,
  ) {
    createPostDto.createdBy = sub;

    return this.postsService.create(createPostDto);
  }

  @Get()
  getList(@Query() query: QueryPostDto) {
    return this.postsService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.postsService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('advertising')
  updateAds(@Body() body: UpdatePostAdsGRPCDto) {
    Logger.debug(JSON.stringify(body));

    return this.postsService.updateAds(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('approved-reject')
  approvedOrReject(@Body() body: UpdatePostApprovedRejectDto) {
    Logger.debug(JSON.stringify(body));

    return this.postsService.approvedOrReject(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete('delete-multiple')
  deleteMultiple(@Query() query: IdsDto) {
    query.ids = formatToArray(query.ids);

    return this.postsService.deleteMultiple(query);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}
