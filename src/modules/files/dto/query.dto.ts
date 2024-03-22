import { ApiPropertyOptional, IntersectionType } from '@nestjs/swagger';
import { IsArray, IsNumberString, IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateFileDto } from './update.dto';

export class QueryFileDto extends IntersectionType(
  UpdateFileDto,
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
}
