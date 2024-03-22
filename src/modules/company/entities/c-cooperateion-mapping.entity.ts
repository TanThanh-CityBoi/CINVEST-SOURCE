import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_cooperation_unq', ['cooperationId'])
@Entity('company_cooperation_mapping')
export class CompanyCooperationMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'cooperation_id', nullable: true })
  cooperationId: number;

  @Column({ name: 'descripption', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'date', type: 'date', nullable: true })
  date: Date;

  @Column({
    name: 'is_customer',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  isCustomer: boolean;

  @ManyToOne(() => CompanyEntity, (company) => company.cooperations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cooperation_id' })
  cooperation: CompanyEntity | null;
}
