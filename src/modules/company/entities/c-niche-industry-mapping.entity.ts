import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { IndustryEntity } from '../../industry/entities/industry.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_niche_industry_unq', ['companyId', 'industryId'])
@Entity('company_niche_industry_mapping')
export class CompanyNicheIndustryMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'industry_id', nullable: true })
  industryId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.niches, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(
    () => IndustryEntity,
    (industry) => industry.companyNicheMappings,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'industry_id' })
  industry: IndustryEntity;
}
