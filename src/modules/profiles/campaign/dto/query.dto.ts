import { IntersectionType, PickType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateCampaignDto } from './update.dto';

export class QueryCampaignDto extends IntersectionType(
  PickType(UpdateCampaignDto, [
    'title',
    'description',
    'minEquity',
    'discount',
    'companyId',
    'launchDate',
    'cityId',
    'type',
    'category',
  ]),
  BaseGetPaginateDto,
) {}
