import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CityEntity } from '../../city/entities/city.entity';
import { CountryEntity } from '../../country/entities/country.entity';
import { EducationEntity } from '../../education/entities/education.entity';

@Entity('schools')
export class SchoolEntity extends BaseAbstractEntity {
  @Column({ name: 'name', unique: true, type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @OneToMany(() => EducationEntity, (educations) => educations.school, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  educations: EducationEntity[];

  @ManyToOne(() => CityEntity, (city) => city.schools, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @ManyToOne(() => CountryEntity, (country) => country.schools, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;
}
