import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { StateEnum } from 'src/common/enums/state.enums';
import { ADVERTISING_TYPE_ENUM } from '../enums/advertising.enum';

export class CreateAdvertisingDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
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
  @ApiPropertyOptional()
  @IsNumber()
  id: number;
}

export class QueryAdvertisingDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsEnum(ADVERTISING_TYPE_ENUM)
  type: ADVERTISING_TYPE_ENUM;
}
