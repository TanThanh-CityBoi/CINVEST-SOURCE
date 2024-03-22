import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { JobTitleEntity } from '../../jobTitle/entities/jobTitle.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_profile_unq', ['companyId', 'profileId'])
@Entity('company_people_mapping')
export class CompanyPeopleMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'job_title_id', nullable: true })
  jobTitleId: number;

  @ManyToOne(() => JobTitleEntity, (jobTitle) => jobTitle.people, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_title_id' })
  jobTitle: JobTitleEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.people, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.companies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;
}
