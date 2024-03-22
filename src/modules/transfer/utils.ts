import { FindOptionsRelations } from 'typeorm';

import { TransferEntity } from './entities/transfer.entity';

export const relations: FindOptionsRelations<TransferEntity> = {
  transferee: true,
  profile: true,
};
