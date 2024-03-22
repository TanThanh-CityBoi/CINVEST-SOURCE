import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

import { CreateHashtagDto } from '../../hashtags/dto/hashtag.dto';
import { POST_TYPE_ENUM } from '../enums/post.enums';

export class CreatePostDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  content: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  thumbnail: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sourceUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  source: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  subjectId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  author: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  areaId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  areaName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  countryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  countryName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  cityId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cityName: string;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  advertisingTime: number;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  publisherId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  view: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    description: 'The type of the post',
    enum: POST_TYPE_ENUM,
    enumName: 'POST_TYPE_ENUM',
    example: POST_TYPE_ENUM.SYSTEM,
  })
  @IsOptional()
  @IsEnum(POST_TYPE_ENUM)
  type: POST_TYPE_ENUM;

  @ApiPropertyOptional({
    isArray: true,
    type: CreateHashtagDto,
  })
  @IsOptional()
  @Type(() => CreateHashtagDto)
  @IsArray()
  hashtags: CreateHashtagDto[];
}
