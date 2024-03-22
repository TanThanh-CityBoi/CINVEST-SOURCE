import { IntersectionType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateRecentNewDto } from './update-recent-new.dto';

export class QueryRecentNewDto extends IntersectionType(
  UpdateRecentNewDto,
  BaseGetPaginateDto,
) {}
