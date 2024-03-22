import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileSkillMappingEntity } from '../../profile/entities/p-skill-mapping.entity';

@Entity('skills')
export class SkillEntity extends BaseAbstractEntity {
  @Column('varchar', { name: 'name', unique: true, nullable: true })
  name: string;

  @OneToMany(() => ProfileSkillMappingEntity, (profiles) => profiles.skill, {
    cascade: true,
  })
  profiles: ProfileSkillMappingEntity[];
}
