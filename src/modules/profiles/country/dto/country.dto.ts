import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class CountryDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;
}
