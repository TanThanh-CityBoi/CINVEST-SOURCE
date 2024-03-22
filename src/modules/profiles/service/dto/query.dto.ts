import { IntersectionType, PickType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateServiceDto } from './update.dto';

export class QueryServiceDto extends IntersectionType(
  PickType(UpdateServiceDto, [
    'name',
    'description',
    'logo',
    'thumb',
    'companyId',
    'industryId',
  ]),
  BaseGetPaginateDto,
) {}
