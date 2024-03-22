import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

export class CreateActionTypeDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateActionTypeDto extends PartialType(CreateActionTypeDto) {}

export class UpdateActionTypeGRPCDto extends PartialType(CreateActionTypeDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

export class QueryActionTypeDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;
}
