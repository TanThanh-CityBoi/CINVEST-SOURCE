import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { TYPE_ENUM } from '../enums/type.enums';

export class CreateTypeDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: TYPE_ENUM.PUBLISHER,
  })
  @IsOptional()
  @IsEnum(TYPE_ENUM)
  type: TYPE_ENUM;
}

export class UpdateTypeDto extends PartialType(CreateTypeDto) {}

export class UpdateTypeGRPCDto extends PartialType(CreateTypeDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class QueryTypeDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: TYPE_ENUM.PUBLISHER,
  })
  @IsOptional()
  @IsEnum(TYPE_ENUM)
  type: TYPE_ENUM;
}
