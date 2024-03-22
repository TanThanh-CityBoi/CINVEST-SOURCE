import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('transfers')
export class TransferEntity extends BaseAbstractEntity {
  @Column({ name: 'transfer_date', type: 'date', nullable: true })
  transferDate?: Date;

  @Column({ name: 'amount', type: 'double', nullable: true })
  amount: number;

  @Column({ name: 'total_value', type: 'double', nullable: true })
  totalValue: number;

  @Column({ name: 'transferee_id', nullable: true })
  transfereeId: number;

  @Column({ name: 'profile_id' })
  profileId: number;

  @ManyToOne(() => CompanyEntity, (transferee) => transferee.transfers)
  @JoinColumn({ name: 'transferee_id' })
  transferee: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.transfers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;
}
