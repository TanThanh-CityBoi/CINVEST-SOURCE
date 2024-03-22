import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { StateEnum } from '../enums/state.enums';

export class BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  createdBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  updatedBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state: StateEnum;
}
