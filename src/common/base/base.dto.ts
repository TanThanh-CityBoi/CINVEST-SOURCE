import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { StateEnum } from '../enums/state.enums';

export class BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  updatedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  createdBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  updatedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state?: StateEnum;
}
