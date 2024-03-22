import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('exits')
export class ExitEntity extends BaseAbstractEntity {
  @Column({ name: 'exit_date', type: 'date', nullable: true })
  exitDate: Date;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.exits, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.exits, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;
}
