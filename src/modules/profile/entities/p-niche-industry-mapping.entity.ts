import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { IndustryEntity } from '../../industry/entities/industry.entity';
import { ProfileEntity } from './profile.entity';

@Unique('profile_niche_industry_unq', ['profileId', 'industryId'])
@Entity('profile_niche_industry_mapping')
export class ProfileNicheIndustryMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'industry_id', nullable: true })
  industryId: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.niches, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(() => IndustryEntity, (industry) => industry.profiles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'industry_id' })
  industry: IndustryEntity;
}
