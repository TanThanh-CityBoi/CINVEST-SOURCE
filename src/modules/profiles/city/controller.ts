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

import { CityDto } from './dto/city.dto';
import { QueryCityDto } from './dto/query.dto';
import { CityService } from './service';

@Controller(CONTROLLER_ENUM.CITY)
@ApiTags(PackageEnum.CITY)
export class CityController {
  constructor(private readonly service: CityService) {}

  @Get()
  getList(@Query() query: QueryCityDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: CityDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CityDto, @Res() res: Response) {
    return this.service.update(dto, res);
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
