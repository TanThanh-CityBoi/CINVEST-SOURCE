import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class IdDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}

export class IdsDto {
  @ApiProperty()
  ids: Array<number>;
}
