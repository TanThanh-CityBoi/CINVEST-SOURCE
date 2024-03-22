import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CountryEntity } from '../../country/entities/country.entity';
import { ProfileEntity } from './profile.entity';

@Unique('profile_invest_location_unq', ['profileId', 'countryId'])
@Entity('profile_invest_location_mapping')
export class ProfileInvestLocationMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.investLocations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(() => CountryEntity, (country) => country.profiles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;
}
