import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { FundingRoundEnum } from 'src/common/enums/enums';

import { DocumentDto } from '../../documents/dtos/documents.dto';
import { FAQDto } from '../../faq/dtos/faq.dto';
import { RecentNewDto } from '../../recentNew/dto/recentNew.dto';
import { UserMappingDto } from '../../user-mapping/dto/user-mapping.dto';
import {
  CAMPAIGN_CATEGORY_ENUMS,
  CAMPAIGN_TYPE_ENUMS,
} from '../enums/campaign.enums';

export class HashtagCreateRequest {
  @ApiProperty({ example: 'Hashtag' })
  @IsString()
  name: string;
}

export class CampaignDto extends BaseDto {
  @ApiPropertyOptional({ example: 'title 1' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'description 1' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  minEquity?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  discount?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional({ example: '2023-10-18 10:00:00' })
  @IsOptional()
  @IsDateString()
  launchDate?: string;

  @ApiPropertyOptional({ example: '2023-10-20 10:00:00' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  minAmount?: number;

  @ApiPropertyOptional({ example: 100 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  valuationCap?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  fundingGoal?: number;

  @ApiPropertyOptional({ example: FundingRoundEnum.ALL })
  @IsOptional()
  @IsEnum(FundingRoundEnum)
  round?: string;

  @ApiPropertyOptional({ example: 'picth title 1' })
  @IsOptional()
  @IsString()
  pitchTtitle?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pitchContent?: string;

  @ApiPropertyOptional({ type: [RecentNewDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecentNewDto)
  recentNews?: RecentNewDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(CAMPAIGN_TYPE_ENUMS)
  type?: CAMPAIGN_TYPE_ENUMS;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(CAMPAIGN_CATEGORY_ENUMS)
  category?: CAMPAIGN_CATEGORY_ENUMS;

  @ApiPropertyOptional({ type: [DocumentDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentDto)
  documents?: DocumentDto[];

  @ApiPropertyOptional({ type: [FAQDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FAQDto)
  faq?: FAQDto[];

  @ApiPropertyOptional({
    example: 'https://dadmin.cinvest.io/admin/media/post.png',
  })
  @IsOptional()
  @IsString()
  companyPicture?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalInvestor?: number;

  @ApiPropertyOptional({
    example: 'https://dadmin.cinvest.io/admin/media/post.png',
  })
  @IsOptional()
  @IsString()
  bannerPicture?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  countryId: number;

  @ApiPropertyOptional({ example: 'VietNam' })
  @IsOptional()
  @IsString()
  countryName: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  cityId: number;

  @ApiPropertyOptional({ example: 'HCM' })
  @IsOptional()
  @IsString()
  cityName: string;

  @ApiPropertyOptional({ type: [UserMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserMappingDto)
  bookmarks: Array<UserMappingDto>;

  @ApiPropertyOptional({ type: [HashtagCreateRequest] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HashtagCreateRequest)
  hashtags: HashtagCreateRequest[];
}
