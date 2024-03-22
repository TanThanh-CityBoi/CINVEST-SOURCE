import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';

export class CreateHashtagDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;
}

export class QueryHashtagDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  ids: number[];
}

export class QueryHashtagExistDto {
  @ApiPropertyOptional({})
  @IsArray()
  name: string[];
}

export class UpdateHashtagDto extends PartialType(CreateHashtagDto) {}

export class UpdateHashtagGRPCDto extends PartialType(CreateHashtagDto) {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;
}
