import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { CompanyEntity } from './company.entity';
@Unique('company_chief_unq', ['companyId', 'chiefId'])
@Entity('company_chief_mapping')
export class CompanyChiefMapping extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'chief_id', nullable: true })
  chiefId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.chiefs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (chief) => chief.chiefCompanies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'chief_id' })
  chief: ProfileEntity;
}
