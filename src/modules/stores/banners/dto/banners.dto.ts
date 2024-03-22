import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { StateEnum } from 'src/common/enums/enums';
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
  @IsOptional()
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  subjectId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingDays: number;

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
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isPriorityAdvertising: YES_NO_ENUM;

  @ApiPropertyOptional({ default: BANNER_TYPE_SERVICES_ENUM.STORES })
  @IsOptional()
  @IsEnum(BANNER_TYPE_SERVICES_ENUM)
  typeServices: BANNER_TYPE_SERVICES_ENUM;
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
