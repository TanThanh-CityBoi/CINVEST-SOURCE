import {
  ApiPropertyOptional,
  IntersectionType,
  PickType,
} from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateCompanyDto } from './update.dto';

export class QueryCompanyDto extends IntersectionType(
  PickType(UpdateCompanyDto, [
    'name',
    'secondName',
    'hashtag',
    'type',
    'authorizedCapital',
    'registerDate',
    'deregisterDate',
    'description',
    'taxNumber',
    'contactNumber',
    'establishmentDecision',
    'responsibleAuthority',
    'employeeNumber',
    'streetAddress',
    'districtId',
    'wardId',
    'headquarterPlaceId',
    'managementPlaceId',
    'taxPlaceId',
    'userId',
    'ipoStockId',
    'parentId',
    'minRange',
    'maxRange',
  ]),
  BaseGetPaginateDto,
) {
  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'number',
    },
  })
  @IsOptional()
  @IsArray()
  @IsNumberString({}, { each: true })
  ids?: number[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isCustomer?: boolean;
}
