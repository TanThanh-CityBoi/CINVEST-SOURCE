import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';
import { ProfileEntity } from './profile.entity';

@Unique('profile_skill_unq', ['profileId', 'skillId'])
@Entity('profile_skill_mapping')
export class ProfileSkillMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'skill_id', nullable: true })
  skillId: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.skills, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(() => SkillEntity, (skill) => skill.profiles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'skill_id' })
  skill: SkillEntity;
}
