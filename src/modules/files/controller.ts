import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';

import { QueryFileDto } from './dto/query.dto';
import { FileService } from './service';

@Controller(CONTROLLER_ENUM.FILE)
@ApiTags(CONTROLLER_ENUM.FILE)
export class FileController {
  constructor(private readonly service: FileService) {}
  @Get()
  getList(@Query() query: QueryFileDto) {
    return this.service.getList(query);
  }

  // @UseGuards(AuthenticationGuard)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
        folder: {
          type: 'string',
        },
      },
    },
  })
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(@Body() req, @UploadedFiles() files) {
    return this.service.uploadPublicFile(files, req.folder);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.service.getById(id);
  }
}
