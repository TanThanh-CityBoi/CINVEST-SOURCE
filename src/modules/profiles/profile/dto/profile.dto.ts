import { ApiPropertyOptional } from '@nestjs/swagger';
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
import { GenderEnum, IndMajorEnum } from 'src/common/enums/enums';

import { AlbumDto } from '../../album/dto/album.dto';
import { EducationDto } from '../../education/dto/education.dto';
import { ExperienceDto } from '../../experience/dto/experience.dto';
import { RecentNewDto } from '../../recentNew/dto/recentNew.dto';
import { SocialDto } from '../../social/dto/social.dto';

export class ProfileSkillMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  profileId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  skillId?: number;
}

export class ProfileNicheIndustryMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  profileId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  industryId?: number;
}

export class ProfileInvestLocationMappingDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  profileId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  countryId?: number;
}

export class ProfileDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dob?: string;

  @ApiPropertyOptional({ enum: GenderEnum })
  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @ApiPropertyOptional({ enum: IndMajorEnum })
  @IsOptional()
  @IsEnum(IndMajorEnum)
  type?: IndMajorEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  cityId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  userId?: number;

  @ApiPropertyOptional({ type: [AlbumDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlbumDto)
  albums?: AlbumDto[];

  @ApiPropertyOptional({ type: [ProfileSkillMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProfileSkillMappingDto)
  skills?: ProfileSkillMappingDto[];

  @ApiPropertyOptional({ type: [EducationDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  educations?: EducationDto[];

  @ApiPropertyOptional({ type: [ExperienceDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExperienceDto)
  experiences?: ExperienceDto[];

  @ApiPropertyOptional({ type: [SocialDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SocialDto)
  socials?: SocialDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dobYear?: string;

  @ApiPropertyOptional({ type: [RecentNewDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecentNewDto)
  recentNews?: RecentNewDto[];

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

  @ApiPropertyOptional({ type: [ProfileNicheIndustryMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProfileNicheIndustryMappingDto)
  niches?: ProfileNicheIndustryMappingDto[];

  @ApiPropertyOptional({ type: [ProfileInvestLocationMappingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProfileInvestLocationMappingDto)
  investLocations?: ProfileInvestLocationMappingDto[];
}
