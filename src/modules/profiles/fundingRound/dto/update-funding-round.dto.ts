import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';

import {
  FundingRoundDto,
  FundingRoundInvestorMappingDto,
} from './fundingRound.dto';

class UpdateFundingRoundInvestorDto extends PartialType(
  FundingRoundInvestorMappingDto,
) {}

export class UpdateFundingRoundDto extends PartialType(
  OmitType(FundingRoundDto, ['investors'] as const),
) {
  @ApiPropertyOptional({ type: [UpdateFundingRoundInvestorDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateFundingRoundInvestorDto)
  investors?: UpdateFundingRoundInvestorDto[];
}
