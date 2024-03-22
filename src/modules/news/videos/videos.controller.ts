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
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { formatToArray } from 'src/common/utils/array.utils';

import { QueryVideoDto } from './dto/query.dto';
import { UpdateAdsVideoDto, UpdateVideoDto } from './dto/update.dto';
import { CreateVideoDto } from './dto/video.dto';
import { VideosService } from './videos.service';

@Controller(CONTROLLER_ENUM.VIDEOS)
@ApiTags('Videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() body: CreateVideoDto, @CognitoUser('sub') sub: string) {
    body.createdBy = sub;

    return this.videosService.create(body);
  }

  @Get()
  getList(@Query() query: QueryVideoDto) {
    return this.videosService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.videosService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('advertising')
  updateAds(@Body() body: UpdateAdsVideoDto) {
    Logger.debug(JSON.stringify(body));

    return this.videosService.updateAds(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('approved-reject')
  approvedOrReject(@Body() body: BaseApprovedRejectDto) {
    return this.videosService.approvedOrReject(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateVideoDto) {
    return this.videosService.update(+id, body);
  }

  @UseGuards(AuthenticationGuard)
  @Delete('delete-multiple')
  deleteMultiple(@Query() query: IdsDto) {
    query.ids = formatToArray(query.ids);

    return this.videosService.deleteMultiple(query);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.videosService.delete(+id);
  }
}
