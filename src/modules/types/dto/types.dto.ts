import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';
import { TYPE_ENUM } from '../enums/type.enums';

export class CreateTypeDto extends BaseDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: TYPE_ENUM.PUBLISHER,
  })
  @IsEnum(TYPE_ENUM)
  type: TYPE_ENUM;
}

export class UpdateTypeDto extends PartialType(CreateTypeDto) {}

export class UpdateTypeGRPCDto extends PartialType(CreateTypeDto) {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;
}

export class QueryTypeDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: TYPE_ENUM.PUBLISHER,
  })
  @IsEnum(TYPE_ENUM)
  type: TYPE_ENUM;
}
