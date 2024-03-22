import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { DegreeTypeEnum } from 'src/common/enums/enums';

export class EducationDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ enum: DegreeTypeEnum })
  @IsNotEmpty()
  @IsEnum(DegreeTypeEnum)
  degreeType?: DegreeTypeEnum;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  major?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  gpa?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  profileId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  cityId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  startYear?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  endYear?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  schoolId?: number;
}
