import { FindOptionsRelations } from 'typeorm';

import { ExitEntity } from './entities/exit.entity';

export const relations: FindOptionsRelations<ExitEntity> = {
  company: true,
  profile: true,
};
