import { IntersectionType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateExperienceDto } from './update-experience.dto';

export class QueryExperienceDto extends IntersectionType(
  UpdateExperienceDto,
  BaseGetPaginateDto,
) {}
