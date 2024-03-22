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
import { AuthenticationGuard } from '@nestjs-cognito/auth';
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { formatToArray } from 'src/common/utils/array.utils';

import { BannerService } from './banners.service';
import { CreateBannerDto } from './dto/banners.dto';
import { QueryBannerDto } from './dto/query.dto';
import { UpdateBannerAdsDto, UpdateBannerDto } from './dto/update.dto';
import { BANNER_TYPE_SERVICES_ENUM } from './enums/banners.enums';

@Controller(CONTROLLER_ENUM.BANNERS)
@ApiTags('Banners')
export class BannersController {
  constructor(private readonly bannerService: BannerService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() createPostDto: CreateBannerDto) {
    createPostDto.typeServices = BANNER_TYPE_SERVICES_ENUM.NEWS;

    return this.bannerService.create(createPostDto);
  }

  @Get()
  getList(@Query() query: QueryBannerDto) {
    query.typeServices = BANNER_TYPE_SERVICES_ENUM.NEWS;
    query.categoryIds = formatToArray(query.categoryIds);
    query.subjectIds = formatToArray(query.subjectIds);

    return this.bannerService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.bannerService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('advertising')
  updateAds(@Body() body: UpdateBannerAdsDto) {
    Logger.debug(JSON.stringify(body));

    return this.bannerService.updateAds(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('approved-reject')
  approvedOrReject(@Body() body: BaseApprovedRejectDto) {
    return this.bannerService.approvedOrReject(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdateBannerDto) {
    updatePostDto.typeServices = BANNER_TYPE_SERVICES_ENUM.NEWS;

    return this.bannerService.update(+id, updatePostDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete('delete-multiple')
  deleteMultiple(@Query() query: IdsDto) {
    query.ids = formatToArray(query.ids);

    return this.bannerService.deleteMultiple(query);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bannerService.delete(+id);
  }
}
