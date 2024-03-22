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

import { ActionTypesService } from './action-types.service';
import {
  CreateActionTypeDto,
  QueryActionTypeDto,
  UpdateActionTypeDto,
} from './dto/action-types.dto';
@Authentication()
@Controller(CONTROLLER_ENUM.ACTION_TYPES)
@ApiTags('Action Types')
export class ActionTypesController {
  constructor(private readonly service: ActionTypesService) {}

  @Post()
  create(@Body() body: CreateActionTypeDto) {
    return this.service.create(body);
  }

  @Get()
  findAll(@Query() query: QueryActionTypeDto) {
    return this.service.getList(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateActionTypeDto) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
