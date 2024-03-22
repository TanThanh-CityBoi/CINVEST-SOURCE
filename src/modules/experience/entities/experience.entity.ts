import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { EmploymentTypeEnum } from '../../../common/enums/enums';
import { CityEntity } from '../../city/entities/city.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { JobTitleEntity } from '../../jobTitle/entities/jobTitle.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('experiences')
export class ExperienceEntity extends BaseAbstractEntity {
  @Column({ name: 'org_id', nullable: true })
  orgId: number;

  @Column({ name: 'start_date', type: 'date', nullable: true })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate: Date;

  @Column({ name: 'start_year', type: 'year', nullable: true })
  startYear: string;

  @Column({ name: 'end_year', type: 'year', nullable: true })
  endYear: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({
    name: 'employment_type',
    type: 'enum',
    enum: [
      EmploymentTypeEnum.FULLTIME,
      EmploymentTypeEnum.PARTTIME,
      EmploymentTypeEnum.OTHER,
    ],
    nullable: true,
    default: EmploymentTypeEnum.OTHER,
  })
  employmentType: string;

  @Column({ name: 'job_title_id', nullable: true })
  jobTitleId: number;

  @Column({
    name: 'current_working',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  currentWorking: boolean;

  @Column({ name: 'description', nullable: true, type: 'varchar' })
  description: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @OneToMany(() => FileEntity, (documents) => documents.userExp)
  documents: FileEntity[];

  @ManyToOne(() => ProfileEntity, (profile) => profile.experiences, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'profile_id' }])
  profile: ProfileEntity;

  @ManyToOne(() => CityEntity, (city) => city.jobLocations, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @ManyToOne(() => JobTitleEntity, (jobTitle) => jobTitle.userExps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_title_id' })
  jobTitle: JobTitleEntity;

  @ManyToOne(() => CompanyEntity, (organization) => organization.employees, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'org_id' })
  organization: CompanyEntity;
}
