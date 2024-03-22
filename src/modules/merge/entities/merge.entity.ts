import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';

@Entity('merges')
export class MergeEntity extends BaseAbstractEntity {
  @Column({ name: 'acquirer_id', nullable: true })
  acquirerId: number;

  @Column({ name: 'acquiree_id', nullable: true })
  acquireeId: number;

  @Column({ name: 'acquirer_equity_percentage', nullable: true })
  acquirerEquityPercentage: number;

  @Column({ name: 'announced_date', type: 'date', nullable: true })
  announcedDate: Date;

  @Column({
    name: 'end_date',
    type: 'date',
    nullable: true,
  })
  endDate: Date;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'value', type: 'double', nullable: true })
  value: number;

  @ManyToOne(() => CompanyEntity, (acquirer) => acquirer.merges, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'acquirer_id' })
  acquirer: CompanyEntity;

  @ManyToOne(() => CompanyEntity, (acquiree) => acquiree.soldMergers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'acquiree_id' })
  acquiree: CompanyEntity;

  @OneToOne(() => FileEntity, (documents) => documents.merger)
  document: FileEntity;
}
