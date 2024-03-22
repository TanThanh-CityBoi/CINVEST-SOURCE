import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { MainAreEnum } from 'src/common/enums/enums';

export class AreaDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(MainAreEnum)
  mainArea?: string;
}
