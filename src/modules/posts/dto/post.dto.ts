import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { CreateHashtagDto } from '../../hashtags/dto/hashtag.dto';
import { AdvertisingEnum } from '../enums/advertising.enums';
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
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  categoryIds: Array<number>;

  @ApiPropertyOptional()
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  subjectIds: Array<number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  author: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  areaId: number;

  @ApiPropertyOptional()
  @IsString()
  areaName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  countryId: number;

  @ApiPropertyOptional()
  @IsString()
  countryName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  cityId: number;

  @ApiPropertyOptional()
  @IsString()
  cityName: string;
  @IsOptional()
  @IsEnum(AdvertisingEnum)
  advertising: AdvertisingEnum;

  @ApiPropertyOptional({
    example: '10:00:00',
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
  @IsNumber()
  view: number;

  @ApiPropertyOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    description: 'The type of the post',
    enum: POST_TYPE_ENUM,
    enumName: 'POST_TYPE_ENUM',
    example: POST_TYPE_ENUM.SYSTEM,
  })
  @IsEnum(POST_TYPE_ENUM)
  type: POST_TYPE_ENUM;

  @ApiPropertyOptional({
    isArray: true,
    type: CreateHashtagDto,
  })
  @IsArray()
  hashtags: CreateHashtagDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class QueryPostDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  areaId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  countryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  cityId: number;

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
  source: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(AdvertisingEnum)
  advertising: AdvertisingEnum;

  @ApiPropertyOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsNumber({}, { each: true })
  categoryIds: number[];

  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsNumber({}, { each: true })
  subjectIds: number[];

  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  subjectId: number;

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsNumber({}, { each: true })
  excludeIds: number[];

  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;

  @ApiPropertyOptional({
    type: StateEnum,
  })
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  minDate: string;

  @ApiPropertyOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  publisherId: number;

  @ApiPropertyOptional()
  @IsEnum(POST_TYPE_ENUM)
  type: POST_TYPE_ENUM;

  @ApiPropertyOptional({
    type: Number,
    isArray: true,
  })
  @IsNumber({}, { each: true })
  ids: number[];
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}

export class UpdatePostGRPCDto {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsNumber()
  dataUpdate: CreatePostDto;
}

export class UpdatePostApprovedRejectDto {
  @ApiPropertyOptional()
  ids: Array<number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class UpdatePostAdsGRPCDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiPropertyOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    example: 5,
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
}
