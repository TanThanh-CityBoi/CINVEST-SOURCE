import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { StateEnum } from '../enums/enums';

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

  @ApiPropertyOptional({
    example: StateEnum.PENDING,
  })
  @IsOptional()
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
