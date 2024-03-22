import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { IndustryEntity } from '../../industry/entities/industry.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_industry_unq', ['companyId', 'industryId'])
@Entity('company_industry_mapping')
export class CompanyIndustryMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'industry_id', nullable: true })
  industryId: number;

  @Column({ name: 'is_main', type: 'boolean', nullable: true, default: false })
  isMain: boolean;

  @ManyToOne(() => CompanyEntity, (company) => company.industries, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => IndustryEntity, (industry) => industry.companyMappings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'industry_id' })
  industry: IndustryEntity;
}
