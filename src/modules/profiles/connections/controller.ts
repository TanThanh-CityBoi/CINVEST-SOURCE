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

import { ConnectionDto } from './dto/connection.dto';
import { QueryConnectionDto } from './dto/query.dto';
import { ConnectionService } from './service';

@Controller(CONTROLLER_ENUM.CONNECTION)
@ApiTags(PackageEnum.CONNECTION)
export class ConnectionController {
  constructor(private readonly service: ConnectionService) {}

  @Get()
  getList(@Query() query: QueryConnectionDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: ConnectionDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put('/accept/:id')
  accept(@Param('id') id: string, @Res() res: Response) {
    return this.service.accept(id, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: ConnectionDto,
    @Res() res: Response,
  ) {
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
