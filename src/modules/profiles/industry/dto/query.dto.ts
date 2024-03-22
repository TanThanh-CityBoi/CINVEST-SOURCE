import { IntersectionType, PickType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateIndustryDto } from './update.dto';

export class QueryIndustryDto extends IntersectionType(
  PickType(UpdateIndustryDto, [
    'name',
    'level1',
    'level2',
    'level3',
    'level4',
    'level5',
  ]),
  BaseGetPaginateDto,
) {}
