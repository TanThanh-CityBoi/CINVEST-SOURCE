import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

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
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  ids: number[];
}

export class QueryHashtagExistDto {
  @ApiPropertyOptional({})
  @IsOptional()
  @IsArray()
  name: string[];
}

export class UpdateHashtagDto extends PartialType(CreateHashtagDto) {}

export class UpdateHashtagGRPCDto extends PartialType(CreateHashtagDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}
