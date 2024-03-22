import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CountryEntity } from '../../country/entities/country.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_invest_location_unq', ['companyId', 'countryId'])
@Entity('company_invest_location_mapping')
export class CompanyInvestLocationMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.investLocations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => CountryEntity, (country) => country.companies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;
}
