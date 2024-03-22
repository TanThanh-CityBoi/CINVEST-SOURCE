import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { FundingRoundEnum, InvestmentTypeEnum } from 'src/common/enums/enums';

import { FileDto } from '../../file/dto/file.dto';
import { RecentNewDto } from '../../recentNew/dto/recentNew.dto';

export class FundingRoundInvestorMappingDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  fundingRoundId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  orgId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  indId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  leadId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  amount?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: string;
}
export class FundingRoundDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  investeeId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  announcedDate?: string;

  @ApiProperty({ enum: FundingRoundEnum })
  @IsNotEmpty()
  @IsEnum(FundingRoundEnum)
  round?: FundingRoundEnum;

  @ApiProperty({ enum: InvestmentTypeEnum })
  @IsNotEmpty()
  @IsEnum(InvestmentTypeEnum)
  type?: InvestmentTypeEnum;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  preMoney?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  moneyRaised?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ type: [FundingRoundInvestorMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundingRoundInvestorMappingDto)
  investors?: FundingRoundInvestorMappingDto[];

  @ApiPropertyOptional({ type: [FileDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileDto)
  documents?: FileDto[];

  @ApiPropertyOptional({ type: [RecentNewDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecentNewDto)
  recentNews?: RecentNewDto[];
}
