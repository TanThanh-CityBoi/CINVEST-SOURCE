import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { CreateHashtagDto } from 'src/modules/hashtags/dto/hashtag.dto';

export class CreateVideoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  categoryIds: Array<number>;

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
  @IsString()
  tag: string;

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

  @ApiPropertyOptional()
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
  @IsArray()
  hashtags: CreateHashtagDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class QueryVideoDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;

  @ApiPropertyOptional({
    type: StateEnum,
  })
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;

  @ApiPropertyOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  advertisingId: number;

  @ApiPropertyOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  categoryId: number;
}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}

export class UpdateVideoGRPCDto extends PartialType(CreateVideoDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class UpdateAdsVideo {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingTime: number;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;
}
