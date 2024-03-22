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

import {
  CreateHashtagDto,
  QueryHashtagDto,
  UpdateHashtagDto,
} from './dto/hashtag.dto';
import { HashtagService } from './hashtags.service';

@Controller(CONTROLLER_ENUM.HASHTAGS)
@ApiTags('Hashtags')
export class HashTagsContorller {
  constructor(private readonly service: HashtagService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() body: CreateHashtagDto) {
    return this.service.create(body);
  }

  @Get()
  findAll(@Query() query: QueryHashtagDto) {
    return this.service.getList(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateHashtagDto) {
    return this.service.update(+id, body);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
