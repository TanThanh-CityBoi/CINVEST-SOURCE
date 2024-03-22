import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ORDER_BY_ENUM } from '../enums/pagination.enums';

export class BaseGetPaginateDto {
  @ApiPropertyOptional({
    default: 1,
  })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  page?: number;

  @ApiPropertyOptional({
    default: 10,
  })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  limit?: number;

  @ApiPropertyOptional({
    example: 'createdAt',
  })
  @IsString()
  @IsOptional()
  sortBy?: string;

  @ApiPropertyOptional({
    example: 'ASC',
    enum: ORDER_BY_ENUM,
  })
  @IsOptional()
  @IsEnum(ORDER_BY_ENUM)
  sortOrder: ORDER_BY_ENUM;
}
