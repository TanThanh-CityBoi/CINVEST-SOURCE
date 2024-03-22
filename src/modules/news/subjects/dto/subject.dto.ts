import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

export class CreateSubjectDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  categoryId: number;
}

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

export class UpdateSubjectGRPCDto extends PartialType(CreateSubjectDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class QuerySubjectDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  categoryIds: number[];
}
