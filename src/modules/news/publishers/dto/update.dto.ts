import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { CreatePublisherDto } from './publisher.dto';

export class UpdatePublisherGRPCReqDto extends PartialType(CreatePublisherDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id: number;
}

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {}
