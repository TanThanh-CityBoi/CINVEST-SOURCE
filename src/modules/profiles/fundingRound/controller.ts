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

import { FundingRoundDto } from './dto/fundingRound.dto';
import { QueryFundingRoundDto } from './dto/query.dto';
import { UpdateFundingRoundDto } from './dto/update-funding-round.dto';
import { FundingRoundService } from './service';

@Controller(CONTROLLER_ENUM.FUNDING)
@ApiTags(PackageEnum.FUNDING)
export class FundingRoundController {
  constructor(private readonly service: FundingRoundService) {}

  @Get()
  getList(@Query() query: QueryFundingRoundDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: FundingRoundDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateFundingRoundDto,
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

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @UseGuards(AuthenticationGuard)
  @Delete(':id/investors/:investorId')
  async deleteInvestor(
    @Param('id') id: number,
    @Param('investorId') investorId: number,
    @Res() res: Response,
  ) {
    return await this.service.deleteInvestor(id, investorId, res);
  }
}
