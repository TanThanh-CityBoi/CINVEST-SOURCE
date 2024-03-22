import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ORDER_BY_ENUM } from '../enums/pagination.enums';

export class BaseGetPaginateDto {
  @ApiPropertyOptional({
    required: false,
    default: 1,
  })
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  page?: number;

  @ApiPropertyOptional({
    required: false,
    default: 10,
  })
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  limit?: number;

  @ApiPropertyOptional({
    required: false,
    example: 'createdAt',
  })
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({
    required: false,
    example: 'ASC',
    description: 'ASC | DESC',
  })
  @IsEnum(ORDER_BY_ENUM)
  sortOrder: ORDER_BY_ENUM;
}
