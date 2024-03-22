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
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { formatToArray } from 'src/common/utils/array.utils';

import {
  CreateSubjectDto,
  QuerySubjectDto,
  UpdateSubjectDto,
} from './dto/subject.dto';
import { SubjectsService } from './subjects.service';

@Controller(CONTROLLER_ENUM.SUBJECTS)
@ApiTags('Subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  getList(@Query() query: QuerySubjectDto) {
    query.categoryIds = formatToArray(query.categoryIds);
    Logger.debug(JSON.stringify(query));

    return this.subjectsService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.subjectsService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.subjectsService.delete(+id);
  }
}
