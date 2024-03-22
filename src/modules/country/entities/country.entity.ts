import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { AreaEntity } from '../../area/entities/area.entity';
import { CityEntity } from '../../city/entities/city.entity';
import { CompanyInvestLocationMappingEntity } from '../../company/entities/c-invest-location-mapping.entity';
import { ProfileInvestLocationMappingEntity } from '../../profile/entities/p-invest-location-mapping.entity';
import { SchoolEntity } from '../../school/entities/school.entity';

@Entity('countries')
export class CountryEntity extends BaseAbstractEntity {
  @Column('varchar', {
    name: 'name',
    unique: true,
    nullable: true,
    length: 191,
  })
  name: string;

  @Column('varchar', { name: 'countryNameEn', nullable: true, length: 191 })
  countryNameEn: string;

  @Column('varchar', { name: 'countryNameLocal', nullable: true, length: 191 })
  countryNameLocal: string;

  @Column('varchar', { name: 'countryCode', nullable: true, length: 191 })
  countryCode: string;

  @Column('varchar', { name: 'currencyCode', nullable: true, length: 191 })
  currencyCode: string;

  @Column('varchar', { name: 'currencyNameEn', nullable: true, length: 191 })
  currencyNameEn: string;

  @Column('varchar', { name: 'tinType', nullable: true, length: 191 })
  tinType: string;

  @Column('varchar', { name: 'tinName', nullable: true, length: 191 })
  tinName: string;

  @Column({ name: 'area_id', nullable: true })
  areaId: number;

  @Column('varchar', {
    name: 'officialLanguageCode',
    nullable: true,
    length: 191,
  })
  officialLanguageCode: string;

  @Column('varchar', {
    name: 'officialLanguageNameEn',
    nullable: true,
    length: 191,
  })
  officialLanguageNameEn: string;

  @Column('varchar', {
    name: 'officialLanguageNameLocal',
    nullable: true,
    length: 191,
  })
  officialLanguageNameLocal: string;

  @Column('varchar', {
    name: 'countryCallingCode',
    nullable: true,
    length: 191,
  })
  countryCallingCode: string;

  @Column('varchar', { name: 'region', nullable: true, length: 191 })
  region: string;

  @Column('varchar', { name: 'flag', nullable: true, length: 191 })
  flag: string;

  @OneToMany(() => CityEntity, (cities) => cities.country, {
    cascade: true,
  })
  cities: CityEntity[];

  @ManyToOne(() => AreaEntity, (area) => area.countries, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'area_id' })
  area: AreaEntity;

  @OneToMany(() => SchoolEntity, (schools) => schools.country)
  schools: SchoolEntity[];

  @OneToMany(
    () => ProfileInvestLocationMappingEntity,
    (profiles) => profiles.country,
    {
      cascade: true,
    },
  )
  profiles: ProfileInvestLocationMappingEntity[];

  @OneToMany(
    () => CompanyInvestLocationMappingEntity,
    (companies) => companies.country,
    {
      cascade: true,
    },
  )
  companies: CompanyInvestLocationMappingEntity[];
}
