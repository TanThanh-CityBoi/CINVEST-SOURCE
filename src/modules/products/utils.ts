import { FindOptionsRelations } from 'typeorm';

import { ProductEntity } from '../products/entities/product.entity';

export const relations: FindOptionsRelations<ProductEntity> = {
  company: true,
  type: true,
  documents: true,
};
