import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';

import { UpdatePostDto } from './update.dto';

export class QueryPostDto extends IntersectionType(
  PickType(UpdatePostDto, [
    'title',
    'areaId',
    'countryId',
    'cityId',
    'advertisingId',
    'categoryId',
    'subjectId',
    'publisherId',
    'type',
    'state',
  ]),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  categoryIds: number[];

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  subjectIds: number[];

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  excludeIds: number[];

  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  minDate: string;

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  ids: number[];
}
