import { IntersectionType, OmitType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateFundingRoundDto } from './update-funding-round.dto';

export class QueryFundingRoundDto extends IntersectionType(
  OmitType(UpdateFundingRoundDto, ['investors', 'documents', 'recentNews']),
  BaseGetPaginateDto,
) {}
