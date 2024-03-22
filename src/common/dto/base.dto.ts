import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StateEnum } from '../enums/state.enums';

export class BaseDto {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsDateString()
  createdAt: string;

  @ApiPropertyOptional()
  @IsDateString()
  updatedAt: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  createdBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  updatedBy: string;

  @ApiPropertyOptional()
  @IsString()
  state: StateEnum;
}

export class BaseApprovedRejectDto {
  @ApiPropertyOptional()
  ids: Array<number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}
