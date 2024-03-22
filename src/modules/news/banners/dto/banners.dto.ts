import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

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
  @IsArray()
  @IsNumberString({}, { each: true })
  categoryIds: Array<number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
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
