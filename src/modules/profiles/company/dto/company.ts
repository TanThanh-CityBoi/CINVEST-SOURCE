import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { OrgMajorEnum } from 'src/common/enums/enums';

import { AlbumDto } from '../../album/dto/album.dto';
import { HashtagCreateRequest } from '../../campaign/dto/campaign.dto';
import { IpoStockDto } from '../../ipoStock/dto/ipoStock.dto';
import { RecentNewDto } from '../../recentNew/dto/recentNew.dto';
import { SocialDto } from '../../social/dto/social.dto';

export class CompanyInvestedMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  investmentId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  investorId?: number;
}

export class CompanyFounderMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  founderId?: number;
}

export class CompanyDirectorMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  directorId?: number;
}

export class CompanyChiefMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  chiefId?: number;
}

export class CompanyPeopleMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  profileId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  jobTitleId?: number;
}

export class CompanyCooperationMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  cooperationId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isCustomer?: boolean;
}

export class CompanyIndustriesMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  industryId?: number;

  @ApiPropertyOptional({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  isMain?: boolean;
}

export class CompanyNicheIndustryMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  industryId?: number;
}

export class CompanyInvestLocationMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  companyId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  countryId?: number;
}

export class CompanyDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  secondName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hashtag?: string;

  @ApiPropertyOptional({ enum: OrgMajorEnum })
  @IsOptional()
  @IsEnum(OrgMajorEnum)
  type?: OrgMajorEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  authorizedCapital?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  registerDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deregisterDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  taxNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  contactNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  establishmentDecision?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  responsibleAuthority?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  employeeNumber?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetAddress?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  districtId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  wardId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  headquarterPlaceId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  managementPlaceId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  taxPlaceId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  userId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  ipoStockId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  parentId?: number;

  @ApiPropertyOptional({ type: [AlbumDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlbumDto)
  albums?: AlbumDto[];

  @ApiPropertyOptional({ type: [CompanyFounderMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyFounderMappingDto)
  founders?: CompanyFounderMappingDto[];

  @ApiPropertyOptional({ type: [CompanyDirectorMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyDirectorMappingDto)
  directors?: CompanyDirectorMappingDto[];

  @ApiPropertyOptional({ type: [CompanyChiefMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyChiefMappingDto)
  chiefs?: CompanyChiefMappingDto[];

  @ApiPropertyOptional({ type: [CompanyPeopleMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyPeopleMappingDto)
  people?: CompanyPeopleMappingDto[];

  @ApiPropertyOptional({ type: [CompanyCooperationMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyCooperationMappingDto)
  cooperations?: CompanyCooperationMappingDto[];

  @ApiPropertyOptional({ type: [SocialDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SocialDto)
  socials?: SocialDto[];

  @ApiPropertyOptional({ type: IpoStockDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => IpoStockDto)
  ipoStock?: IpoStockDto;

  @ApiPropertyOptional({ type: [CompanyIndustriesMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyIndustriesMappingDto)
  industries?: CompanyIndustriesMappingDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  minRange?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  maxRange?: number;

  @ApiPropertyOptional({ type: [HashtagCreateRequest] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HashtagCreateRequest)
  hashtags: HashtagCreateRequest[];

  @ApiPropertyOptional({ type: [RecentNewDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecentNewDto)
  recentNews: RecentNewDto[];

  @ApiPropertyOptional({ type: [CompanyNicheIndustryMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyNicheIndustryMappingDto)
  niches: CompanyNicheIndustryMappingDto[];

  @ApiPropertyOptional({ type: [CompanyInvestLocationMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyInvestLocationMappingDto)
  investLocations: CompanyInvestLocationMappingDto[];
}
