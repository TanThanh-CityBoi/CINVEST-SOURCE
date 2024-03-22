import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { ProductTypeEntity } from '../../productType/entities/product-type.entity';

@Entity('products')
export class ProductEntity extends BaseAbstractEntity {
  @Column({ name: 'name', nullable: true, type: 'varchar' })
  name: string;

  @Column({ name: 'description', nullable: true, type: 'varchar' })
  description: string;

  @Column({ name: 'type_id', nullable: true })
  typeId: number;

  @Column({ name: 'logo', nullable: true })
  logo: string;

  @Column({ name: 'thumb', nullable: true })
  thumb: string;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @ManyToOne(() => ProductTypeEntity, (type) => type.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'type_id' })
  type: ProductTypeEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @OneToMany(() => FileEntity, (documents) => documents.product, {
    cascade: true,
  })
  documents: FileEntity[];
}
