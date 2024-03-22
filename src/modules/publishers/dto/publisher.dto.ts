import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';
import { StateEnum } from 'src/common/enums/enums';
import { PUBLISHER_POST_TYPE_ENUM } from '../enums/publisher.enum';

export class CreatePublisherDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  thumbnail: string;

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  typeId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  url: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(PUBLISHER_POST_TYPE_ENUM)
  postType: PUBLISHER_POST_TYPE_ENUM;
}

export class QueryPublisherDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

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
  @IsNumber()
  typeId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  createdAt: string;

  @ApiPropertyOptional({
    type: StateEnum,
  })
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(PUBLISHER_POST_TYPE_ENUM)
  postType: PUBLISHER_POST_TYPE_ENUM;
}

export class DeletePublisherDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class UpdatePublisherGRPCReqDto extends PartialType(CreatePublisherDto) {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {}
