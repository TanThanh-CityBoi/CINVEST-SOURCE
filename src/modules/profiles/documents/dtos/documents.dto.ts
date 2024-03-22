import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

import {
  CATEGORY_DOCS_ENUM,
  PRIVACY_DOCS_ENUM,
} from '../enums/documents.enums';

export class DocumentDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  size?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(CATEGORY_DOCS_ENUM)
  category?: CATEGORY_DOCS_ENUM;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(PRIVACY_DOCS_ENUM)
  privacy?: PRIVACY_DOCS_ENUM;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  campaignId?: number;
}
