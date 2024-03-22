import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';

import { UpdateVideoDto } from './update.dto';

export class QueryVideoDto extends IntersectionType(
  PickType(UpdateVideoDto, ['title', 'state', 'advertisingId', 'categoryId']),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;
}
