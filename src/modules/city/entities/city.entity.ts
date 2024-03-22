import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { CountryEntity } from '../../country/entities/country.entity';
import { EducationEntity } from '../../education/entities/education.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { SchoolEntity } from '../../school/entities/school.entity';

@Entity('cities')
export class CityEntity extends BaseAbstractEntity {
  @Column({ name: 'name', unique: true, type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @ManyToOne(() => CountryEntity, (country) => country.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @OneToMany(() => ProfileEntity, (profiles) => profiles.city)
  profiles: ProfileEntity[];

  @OneToMany(() => EducationEntity, (educations) => educations.city)
  educations: EducationEntity[];

  @OneToMany(() => ExperienceEntity, (jobLocations) => jobLocations.city)
  jobLocations: ExperienceEntity[];

  @OneToMany(
    () => CompanyEntity,
    (headquarterCompanies) => headquarterCompanies.headquarterPlace,
  )
  headquarterCompanies: CompanyEntity[];

  @OneToMany(
    () => CompanyEntity,
    (managementCompanies) => managementCompanies.managementPlace,
  )
  managementCompanies: CompanyEntity[];

  @OneToMany(() => CompanyEntity, (taxCompanies) => taxCompanies.taxPlace)
  taxCompanies: CompanyEntity[];

  @OneToMany(() => SchoolEntity, (schools) => schools.city)
  schools: SchoolEntity[];
}
