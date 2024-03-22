import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '@nestjs-cognito/auth';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { PackageEnum } from 'src/common/enums/enums';

import { CampaignDto } from './dto/campaign.dto';
import { QueryCampaignDto } from './dto/query.dto';
import { UpdateCampaignDto } from './dto/update.dto';
import { CampaignService } from './service';

@Controller(CONTROLLER_ENUM.CAMPAIGN)
@ApiTags(PackageEnum.CAMPAIGN)
export class CampaignController {
  constructor(private readonly service: CampaignService) {}

  @Get('/count')
  count(@Query() query: QueryCampaignDto, @Res() res: Response) {
    return this.service.count(query, res);
  }

  @Get()
  getList(@Query() query: QueryCampaignDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: CampaignDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCampaignDto,
    @Res() res: Response,
  ) {
    return this.service.update({ ...dto, id: +id }, res);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    return await this.service.getById(id, res);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    return await this.service.delete(id, res);
  }
}
