import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class UserMappingDto extends BaseDto {
  @ApiPropertyOptional({ example: '5fc4bb77-9065-4560-bee1-7b505e9e197c' })
  @IsOptional()
  @IsString()
  sub?: string;
}
