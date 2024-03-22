import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StateEnum } from 'src/common/enums/enums';

import { ADVERTISING_TYPE_ENUM } from '../enums/advertising.enum';

export class CreateAdvertisingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ADVERTISING_TYPE_ENUM)
  type: ADVERTISING_TYPE_ENUM;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class UpdateAdvertisingDto extends PartialType(CreateAdvertisingDto) {}

export class UpdateAdvertisingGRPCDto extends PartialType(
  CreateAdvertisingDto,
) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

export class QueryAdvertisingDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(ADVERTISING_TYPE_ENUM)
  type: ADVERTISING_TYPE_ENUM;
}
