import { FindOptionsRelations } from 'typeorm';

import { ServiceEntity } from './entities/service.entity';

export const relations: FindOptionsRelations<ServiceEntity> = {
  company: true,
  industry: true,
};
