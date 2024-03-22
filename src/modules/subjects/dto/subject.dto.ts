import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { StateEnum } from 'src/common/enums/state.enums';

export class CreateSubjectDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

export class UpdateSubjectGRPCDto extends PartialType(CreateSubjectDto) {
  @ApiPropertyOptional()
  @IsNumber()
  id: number;
}

export class QuerySubjectDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  categoryIds: number[];
}
