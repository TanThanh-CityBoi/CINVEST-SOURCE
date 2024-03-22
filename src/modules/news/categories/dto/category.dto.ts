import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
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
  @IsOptional()
  @IsEnum(YES_NO_ENUM)
  isIncludeSubject: YES_NO_ENUM;
}
