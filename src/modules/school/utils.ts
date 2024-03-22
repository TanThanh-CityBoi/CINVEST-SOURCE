import { FindOptionsRelations } from 'typeorm';

import { SchoolEntity } from './entities/school.entity';

export const relations: FindOptionsRelations<SchoolEntity> = {
  educations: true,
  city: true,
  country: true,
};
