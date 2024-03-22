import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard, CognitoUser } from '@nestjs-cognito/auth';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { PackageEnum } from 'src/common/enums/enums';

import { ArchiveRecordService } from './archive-records.service';
import { QueryArchiveRecordDto } from './dto/query.dto';

@ApiTags(PackageEnum.ARCHIVE_RECORD)
@UseGuards(AuthenticationGuard)
@Controller(CONTROLLER_ENUM.ARCHIVE_RECORD)
export class ArchiveRecordController {
  constructor(private readonly service: ArchiveRecordService) {}

  @Get()
  getList(
    @CognitoUser('email') email: string,
    @Query() query: QueryArchiveRecordDto,
    @Res() res: Response,
  ) {
    return this.service.getList(email, query, res);
  }
}
