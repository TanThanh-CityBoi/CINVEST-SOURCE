import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StateEnum } from 'src/common/enums/enums';

import { CreatePostDto } from './post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}

export class UpdatePostGRPCDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  dataUpdate: CreatePostDto;
}

export class UpdatePostApprovedRejectDto {
  @ApiProperty()
  @IsNotEmpty()
  ids: Array<number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(StateEnum)
  state: StateEnum;
}

export class UpdatePostAdsGRPCDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  advertisingId: number;

  @ApiPropertyOptional({
    example: 5,
  })
  @IsOptional()
  @IsNumber()
  advertisingTime: number;

  @ApiPropertyOptional({
    example: '2023-09-22 10:00:00',
  })
  @IsOptional()
  @IsString()
  startDateAdvertising: string;
}
