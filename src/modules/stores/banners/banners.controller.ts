import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '@nestjs-cognito/auth';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';

import { BannerService } from './banners.service';
import {
  CreateBannerDto,
  QueryBannerDto,
  UpdateBannerDto,
} from './dto/banners.dto';
import { BANNER_TYPE_SERVICES_ENUM } from './enums/banners.enums';

@Controller(CONTROLLER_ENUM.STORES_BANNERS)
@ApiTags('Stores Banners')
export class BannersController {
  constructor(private readonly bannerService: BannerService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() createPostDto: CreateBannerDto) {
    createPostDto.typeServices = BANNER_TYPE_SERVICES_ENUM.STORES;

    return this.bannerService.create(createPostDto);
  }

  @Get()
  getList(@Query() query: QueryBannerDto) {
    query.typeServices = BANNER_TYPE_SERVICES_ENUM.STORES;

    return this.bannerService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.bannerService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdateBannerDto) {
    updatePostDto.typeServices = BANNER_TYPE_SERVICES_ENUM.STORES;

    return this.bannerService.update(+id, updatePostDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bannerService.delete(+id);
  }
}
