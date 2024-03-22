import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PaginationDto {
  @ApiPropertyOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional()
  @IsString()
  sortOrder?: string;
}
