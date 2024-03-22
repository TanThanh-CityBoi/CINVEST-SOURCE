import { IntersectionType, OmitType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateAcquisitionDto } from './update-acquisition.dto';

export class QueryAcquisitionDto extends IntersectionType(
  BaseGetPaginateDto,
  OmitType(UpdateAcquisitionDto, ['recentNews'] as const),
) {}
