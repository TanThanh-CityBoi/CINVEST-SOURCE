import { FindOptionsRelations } from 'typeorm';

import { AcquisitionEntity } from './entities/acquisition.entity';

export const relations: FindOptionsRelations<AcquisitionEntity> = {
  acqAcquiree: true,
  acqAcquirer: true,
  documents: true,
  recentNews: true,
};
