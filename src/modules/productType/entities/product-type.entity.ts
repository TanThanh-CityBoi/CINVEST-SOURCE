import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProductMajor } from '../../../common/enums/enums';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity('product_types')
export class ProductTypeEntity extends BaseAbstractEntity {
  @Column({ name: 'name', unique: true, type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'code', unique: true, type: 'varchar', nullable: true })
  code: string;

  @Column({
    name: 'major',
    type: 'enum',
    enum: [
      ProductMajor.LIFESTYLE,
      ProductMajor.FMCG,
      ProductMajor.EL,
      ProductMajor.FASHION,
      ProductMajor.OTHER,
    ],
    default: ProductMajor.OTHER,
    nullable: true,
  })
  major: string;

  @OneToMany(() => ProductEntity, (products) => products.type, {
    cascade: true,
  })
  products: ProductEntity[];
}
