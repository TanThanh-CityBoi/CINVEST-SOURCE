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
import { Authentication } from '@nestjs-cognito/auth';

import { AdvertisingsService } from './advertisings.service';
import {
  CreateAdvertisingDto,
  QueryAdvertisingDto,
  UpdateAdvertisingDto,
} from './dto/advertisings.dto';
@Authentication()
@Controller('advertisings')
@ApiTags('Advertisings')
export class AdvertisingsController {
  constructor(private readonly advertisingsService: AdvertisingsService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(
    @Body() createAdvertisingDto: CreateAdvertisingDto,
    // @CognitoUser('sub') sub: string,
  ) {
    return this.advertisingsService.create(createAdvertisingDto);
  }

  @Get()
  getList(@Query() query: QueryAdvertisingDto) {
    return this.advertisingsService.getList(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisingsService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdvertisingDto: UpdateAdvertisingDto,
  ) {
    return this.advertisingsService.update(+id, updateAdvertisingDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.advertisingsService.delete(+id);
  }
}
