import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';

export class CreateActionTypeDto extends BaseDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;
}

export class UpdateActionTypeDto extends PartialType(CreateActionTypeDto) {}

export class UpdateActionTypeGRPCDto extends PartialType(CreateActionTypeDto) {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;
}

export class QueryActionTypeDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;
}
