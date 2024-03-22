import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

export class QueryFileDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  url?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  key?: string;

  @ApiPropertyOptional({ type: 'boolean' })
  @IsBoolean()
  @IsOptional()
  isPublic: boolean;

  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'number',
    },
  })
  @IsOptional()
  ids?: number[];
}
