import { FindOptionsRelations } from 'typeorm';

import { EducationEntity } from './entities/education.entity';

export const relations: FindOptionsRelations<EducationEntity> = {
  city: {
    country: true,
  },
};
