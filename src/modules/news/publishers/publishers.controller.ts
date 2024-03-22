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
import { BaseApprovedRejectDto } from 'src/common/dto/base.dto';
import { IdsDto } from 'src/common/dto/id.dto';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { formatToArray } from 'src/common/utils/array.utils';

import { CreatePublisherDto } from './dto/publisher.dto';
import { QueryPublisherDto } from './dto/query.dto';
import { UpdatePublisherDto } from './dto/update.dto';
import { PublishersService } from './publishers.service';

@Controller(CONTROLLER_ENUM.PUBLISHERS)
@ApiTags('Publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publishersService.create(createPublisherDto);
  }

  @Get()
  getList(@Query() query: QueryPublisherDto) {
    Logger.debug(JSON.stringify(query));

    return this.publishersService.getList(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.publishersService.getById(+id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('approved-reject')
  approvedOrReject(@Body() body: BaseApprovedRejectDto) {
    return this.publishersService.approvedOrReject(body);
  }

  @UseGuards(AuthenticationGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publishersService.update(+id, updatePublisherDto);
  }

  @UseGuards(AuthenticationGuard)
  @Delete('delete-multiple')
  deleteMultiple(@Query() query: IdsDto) {
    query.ids = formatToArray(query.ids);

    return this.publishersService.deleteMultiple(query);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.publishersService.delete(+id);
  }
}
