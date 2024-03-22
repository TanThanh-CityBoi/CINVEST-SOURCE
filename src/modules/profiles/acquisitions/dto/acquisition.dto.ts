import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

import { DocumentDto } from '../../documents/dtos/documents.dto';
import { RecentNewDto } from '../../recentNew/dto/recentNew.dto';

export class AcquisitionDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  acquirerId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  acquireeId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  newAcquireeId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  announcedDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  value?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  equity?: number;

  @ApiPropertyOptional({ type: [DocumentDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentDto)
  documents?: DocumentDto[];

  @ApiPropertyOptional({ type: [RecentNewDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentDto)
  recentNews?: RecentNewDto[];
}
