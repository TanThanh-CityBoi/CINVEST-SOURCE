import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import { IsArray, IsNumberString, IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateUserDto } from './update.dto';

export class QueryUserDto extends IntersectionType(
  PickType(UpdateUserDto, [
    'email',
    'password',
    'phone',
    'phonePrefix',
    'role',
    'profileType',
  ]),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'number',
    },
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  ids?: number[];

  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @IsOptional()
  subs?: string[];
}
