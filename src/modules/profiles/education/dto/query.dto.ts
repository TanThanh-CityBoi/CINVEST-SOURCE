import { ApiPropertyOptional, IntersectionType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateEducationDto } from './update-education.dto';

export class QueryEducationDto extends IntersectionType(
  UpdateEducationDto,
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  school?: string;
}
