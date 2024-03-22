import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class FileDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  key?: string;

  @ApiPropertyOptional({ type: 'boolean' })
  @IsOptional()
  @IsBoolean()
  isPublic: boolean;

  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  @IsDateString()
  createdAt: string;

  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  @IsDateString()
  updatedAt: string;
}
