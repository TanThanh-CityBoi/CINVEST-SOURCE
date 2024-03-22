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

import { AcquisitionDto } from './dto/acquisition.dto';
import { QueryAcquisitionDto } from './dto/query.dto';
import { UpdateAcquisitionDto } from './dto/update-acquisition.dto';
import { AcquisitionService } from './service';

@Controller(CONTROLLER_ENUM.ACQUISITION)
@ApiTags(PackageEnum.ACQUISITION)
export class AcquisitionController {
  constructor(private readonly service: AcquisitionService) {}

  @Get()
  getList(@Query() query: QueryAcquisitionDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: AcquisitionDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAcquisitionDto,
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
