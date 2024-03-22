import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdatePublisherDto } from './update.dto';

export class QueryPublisherDto extends IntersectionType(
  PickType(UpdatePublisherDto, [
    'name',
    'countryId',
    'cityId',
    'typeId',
    'postType',
    'state',
  ]),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  @IsDateString()
  createdAt: string;
}
