import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';
import { ProfileTypeEnum, RoleEnum } from 'src/common/enums/enums';

export class QueryUserDto extends BaseGetPaginateDto {
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

  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'number',
    },
  })
  @IsOptional()
  ids?: number[];

  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @IsOptional()
  subs?: string[];
}
