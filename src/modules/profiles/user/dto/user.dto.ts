import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/common/dto/base.dto';
import { ProfileTypeEnum, RoleEnum } from 'src/common/enums/enums';

import {
  FundingRoundRecordDto,
  IndividualRecordDto,
  OrganizationRecordDto,
} from '../../archive-records/dto/archive-record.dto';
import { CompanyDto } from '../../company/dto/company';
import { ProfileDto } from '../../profile/dto/profile.dto';

export class UserDto extends BaseDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sub?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phonePrefix?: string;

  @ApiPropertyOptional({ enum: RoleEnum })
  @IsOptional()
  @IsEnum(RoleEnum)
  role?: RoleEnum;

  @ApiPropertyOptional({ enum: ProfileTypeEnum })
  @IsOptional()
  @IsEnum(ProfileTypeEnum)
  profileType?: ProfileTypeEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  thumb?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  background?: string;

  @ApiPropertyOptional({ type: ProfileDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile?: ProfileDto;

  @ApiPropertyOptional({ type: CompanyDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => CompanyDto)
  company?: CompanyDto;

  @ApiPropertyOptional({ type: [IndividualRecordDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IndividualRecordDto)
  individualRecords?: IndividualRecordDto[];

  @ApiPropertyOptional({ type: [OrganizationRecordDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrganizationRecordDto)
  organizationRecords?: OrganizationRecordDto[];

  @ApiPropertyOptional({ type: [FundingRoundRecordDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundingRoundRecordDto)
  fundingRoundRecords?: FundingRoundRecordDto[];
}
