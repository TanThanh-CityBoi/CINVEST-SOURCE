import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class SkillDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
