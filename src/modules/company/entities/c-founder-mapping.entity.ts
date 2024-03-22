import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_founder_unq', ['companyId', 'founderId'])
@Entity('company_founder_mapping')
export class CompanyFounderMapping extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'founder_id', nullable: true })
  founderId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.founders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (founder) => founder.foundedCompanies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'founder_id' })
  founder: ProfileEntity;
}
