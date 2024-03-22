import { FindOptionsRelations } from 'typeorm';

import { ExperienceEntity } from './entities/experience.entity';

export const relations: FindOptionsRelations<ExperienceEntity> = {
  city: {
    country: true,
  },
  jobTitle: true,
  organization: true,
};
