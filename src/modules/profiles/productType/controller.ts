import { AuthenticationGuard } from '@nestjs-cognito/auth';
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
  UseGuards
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { PackageEnum } from 'src/common/enums/enums';

import { ProductTypeDto } from './dto/productType.dto';
import { QueryProductTypeDto } from './dto/query.dto';
import { ProductTypeService } from './service';

@Controller(CONTROLLER_ENUM.PRODUCT_TYPE)
@ApiTags(PackageEnum.PRODUCT_TYPE)
export class ProductTypeController {
  constructor(private readonly service: ProductTypeService) {}

  @Get()
  getList(@Query() query: QueryProductTypeDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: ProductTypeDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: ProductTypeDto,
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
