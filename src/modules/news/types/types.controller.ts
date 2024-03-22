import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Authentication } from '@nestjs-cognito/auth';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';

import { CreateTypeDto, QueryTypeDto, UpdateTypeDto } from './dto/types.dto';
import { TypesService } from './types.service';
@Authentication()
@Controller(CONTROLLER_ENUM.TYPES)
@ApiTags('Types')
export class TypesController {
  constructor(private readonly service: TypesService) {}

  @Post()
  create(@Body() body: CreateTypeDto) {
    return this.service.create(body);
  }

  @Get()
  findAll(@Query() query: QueryTypeDto) {
    return this.service.getList(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTypeDto) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
