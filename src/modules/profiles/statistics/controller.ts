import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { PackageEnum } from 'src/common/enums/enums';

import { StatisticGetRequest } from './dto/query.dto';
import { StatisticService } from './service';

@Controller(CONTROLLER_ENUM.STATISTIC)
@ApiTags(PackageEnum.STATISTIC)
export class StatisticController {
  constructor(private readonly service: StatisticService) {}

  @Get()
  getList(@Query() query: StatisticGetRequest, @Res() res: Response) {
    return this.service.getList(query, res);
  }
}
