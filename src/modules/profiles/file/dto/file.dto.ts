import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class FileDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  url: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  key: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  fundingRoundId?: number;

  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  @IsDateString()
  createdAt: string;

  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  @IsDateString()
  updatedAt: string;
}
