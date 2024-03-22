import { FindOptionsRelations } from 'typeorm';

import { CountryEntity } from './entities/country.entity';

export const relations: FindOptionsRelations<CountryEntity> = {
  cities: true,
  area: true,
};
