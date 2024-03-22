import { FindOptionsRelations } from 'typeorm';

import { MergeEntity } from './entities/merge.entity';

export const listRelations: FindOptionsRelations<MergeEntity> = {
  acquirer: true,
  acquiree: true,
};

export const relations: FindOptionsRelations<MergeEntity> = {
  acquirer: true,
  acquiree: true,
  document: true,
};
