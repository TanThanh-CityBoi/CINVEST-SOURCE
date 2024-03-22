import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyPeopleMappingEntity } from '../../company/entities/c-people-mapping.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';

@Entity('job_titles')
export class JobTitleEntity extends BaseAbstractEntity {
  @Column({ name: 'name', unique: true, type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'is_board', type: 'boolean', nullable: true, default: false })
  isBoard: boolean;

  @OneToMany(() => ExperienceEntity, (userExps) => userExps.jobTitle)
  userExps: ExperienceEntity[];

  @OneToMany(() => CompanyPeopleMappingEntity, (people) => people.jobTitle)
  people: CompanyPeopleMappingEntity[];
}
