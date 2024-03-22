import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { RecentNewEntity } from '../../recentNews/entities/recentNew.entity';

@Entity('acquisitions')
export class AcquisitionEntity extends BaseAbstractEntity {
  @Column({ name: 'acquirer_id', nullable: true })
  acquirerId: number;

  @Column({ name: 'acquiree_id', nullable: true })
  acquireeId: number;

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

  @Column({ name: 'equity', nullable: true })
  equity: number;

  @ManyToOne(() => CompanyEntity, (acqAcquirer) => acqAcquirer.acquisitions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'acquirer_id' })
  acqAcquirer: CompanyEntity;

  @ManyToOne(
    () => CompanyEntity,
    (acqAcquiree) => acqAcquiree.soldAcquisitions,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'acquiree_id' })
  acqAcquiree: CompanyEntity;

  @OneToMany(() => FileEntity, (documents) => documents.acquisition, {
    cascade: true,
  })
  documents: FileEntity[];

  @OneToMany(() => RecentNewEntity, (recentNews) => recentNews.acquisition, {
    cascade: true,
  })
  recentNews: RecentNewEntity[];
}
