import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';

export class FundingRoundRecordDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fundingRoundId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  userId?: number;
}

export class IndividualRecordDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  profileId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  userId?: number;
}

export class OrganizationRecordDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  companyId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  userId?: number;
}
