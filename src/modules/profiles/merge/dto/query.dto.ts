import { IntersectionType, OmitType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateMergeDto } from './update-merge.dto';

export class QueryMergeDto extends IntersectionType(
  BaseGetPaginateDto,
  OmitType(UpdateMergeDto, ['acquirerEquityPercentage'] as const),
) {}
