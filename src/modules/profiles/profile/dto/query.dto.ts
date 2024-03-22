import { IntersectionType, PickType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { ProfileDto } from './profile.dto';

export class QueryProfileDto extends IntersectionType(
  PickType(ProfileDto, [
    'firstName',
    'lastName',
    'dob',
    'gender',
    'type',
    'cityId',
    'description',
    'userId',
    'dobYear',
    'minRange',
    'maxRange',
  ]),
  BaseGetPaginateDto,
) {}
