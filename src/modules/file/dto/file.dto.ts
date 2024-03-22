import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/base/base.dto';

export class FileDto extends BaseDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  url?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  key?: string;

  @ApiPropertyOptional({ type: 'boolean' })
  @IsBoolean()
  @IsOptional()
  isPublic: boolean;
}
