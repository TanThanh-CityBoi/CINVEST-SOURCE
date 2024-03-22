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

import { QueryRecentNewDto } from './dto/query.dto';
import { RecentNewDto } from './dto/recentNew.dto';
import { UpdateRecentNewDto } from './dto/update-recent-new.dto';
import { RecentNewService } from './service';

@Controller(CONTROLLER_ENUM.RECENT_NEW)
@ApiTags(PackageEnum.RECENT_NEW)
export class RecentNewController {
  constructor(private readonly service: RecentNewService) {}

  @Get()
  getList(@Query() query: QueryRecentNewDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: RecentNewDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateRecentNewDto,
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
