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
import { StateEnum } from 'src/common/enums/enums';

import { CreateHashtagDto } from '../../hashtags/dto/hashtag.dto';

export class CreateVideoDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  youtubeId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descriptions: string;

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  advertisingTime: number;

  @ApiPropertyOptional({
    isArray: true,
    type: CreateHashtagDto,
  })
  @IsOptional()
  @Type(() => CreateHashtagDto)
  @IsArray()
  hashtags: CreateHashtagDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;
}
