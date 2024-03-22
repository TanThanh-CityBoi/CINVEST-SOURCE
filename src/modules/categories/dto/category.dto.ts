import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { BaseDto } from 'src/common/dto/base.dto';
import { YES_NO_ENUM } from 'src/common/enums/yes-no.enum';

export class CreateCategoryDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

export class UpdateCategoryGRPCDto extends PartialType(CreateCategoryDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class QueryCategoryDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    type: YES_NO_ENUM,
  })
  @IsEnum(YES_NO_ENUM)
  isIncludeSubject: YES_NO_ENUM;
}
