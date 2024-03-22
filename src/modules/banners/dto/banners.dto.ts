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
import { BaseDto } from 'src/common/dto/base.dto';
import { StateEnum } from 'src/common/enums/state.enums';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';
import { BANNER_TYPE_SERVICES_ENUM } from '../enums/banners.enums';

export class CreateBannerDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  typeId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  actionTypeId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  redirectUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  startDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  attachment: string;

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
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingDays: number;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;

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
  @IsEnum(BANNER_TYPE_SERVICES_ENUM)
  typeServices: BANNER_TYPE_SERVICES_ENUM;
}

export class QueryBannerDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    type: StateEnum,
  })
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;

  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;

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
  @IsEnum(BANNER_TYPE_SERVICES_ENUM)
  typeServices: BANNER_TYPE_SERVICES_ENUM;

  @ApiPropertyOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  advertisingId: number;

  @ApiPropertyOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  actionTypeId: number;
}

export class UpdateBannerDto extends PartialType(CreateBannerDto) {}

export class UpdateBannerGRPCDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  dataUpdate: CreateBannerDto;
}

export class UpdateBannerAdsDto {
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
  advertisingDays: number;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;
}
