import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

import { StateEnum } from '../enums/enums';

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
  @IsString()
  createdBy: string;

  @ApiPropertyOptional()
  @IsString()
  updatedBy: string;

  @ApiPropertyOptional()
  @IsString()
  state: StateEnum;
}
