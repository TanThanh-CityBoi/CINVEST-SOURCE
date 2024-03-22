import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class QAndADto extends BaseDto {
  @ApiPropertyOptional({ example: 'question?' })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiPropertyOptional({ example: 'answer' })
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  faqId?: number;
}

export class FAQDto extends BaseDto {
  @ApiPropertyOptional({ example: 'category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  campaignId?: number;

  @ApiPropertyOptional({ type: [QAndADto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QAndADto)
  qAndA: QAndADto[];
}
