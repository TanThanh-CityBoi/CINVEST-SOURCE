import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';

import { UpdateBannerDto } from './update.dto';

export class QueryBannerDto extends IntersectionType(
  PickType(UpdateBannerDto, [
    'name',
    'categoryIds',
    'subjectIds',
    'typeServices',
    'advertisingId',
    'actionTypeId',
    'state',
  ]),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;
}
