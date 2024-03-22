import { FindOptionsRelations } from 'typeorm';

import { IpoStockEntity } from './entities/ipoStock.entity';

export const relations: FindOptionsRelations<IpoStockEntity> = {
  company: true,
};
