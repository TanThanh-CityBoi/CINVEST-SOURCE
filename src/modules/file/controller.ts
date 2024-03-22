import { AuthenticationGuard } from '@nestjs-cognito/auth';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { CONTROLLER } from 'src/common/enums/controller.enums';
import { QueryFileDto } from './dto/query.dto';
import { FileService } from './service';

@Controller(CONTROLLER.FILE)
@ApiTags(CONTROLLER.FILE)
export class FileController {
  constructor(private readonly service: FileService) {}
  @Get()
  getList(@Query() query: QueryFileDto) {
    return this.service.getList(query);
  }

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
  @UseGuards(AuthenticationGuard)
  @Post('private')
  @UseInterceptors(FilesInterceptor('files'))
  createPrivate(@Body() req, @UploadedFiles() files) {
    return this.service.uploadPrivateFile(files, req.folder);
  }

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
  @UseGuards(AuthenticationGuard)
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
