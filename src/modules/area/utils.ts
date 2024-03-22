import { FindOptionsRelations } from 'typeorm';

import { AreaEntity } from './entities/area.entity';

export const relations: FindOptionsRelations<AreaEntity> = {
  countries: {
    cities: true,
  },
};
