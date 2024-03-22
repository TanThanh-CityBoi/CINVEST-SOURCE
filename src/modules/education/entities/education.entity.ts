import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { DegreeTypeEnum } from '../../../common/enums/enums';
import { CityEntity } from '../../city/entities/city.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { SchoolEntity } from '../../school/entities/school.entity';

@Entity('educations')
export class EducationEntity extends BaseAbstractEntity {
  @Column({ name: 'start_date', type: 'date', nullable: true })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate: Date;

  @Column({ name: 'start_year', type: 'year', nullable: true })
  startYear: string;

  @Column({ name: 'end_year', type: 'year', nullable: true })
  endYear: string;

  @Column({
    name: 'degree_type',
    type: 'enum',
    enum: [
      DegreeTypeEnum.BACHELOR,
      DegreeTypeEnum.DIPLOMA,
      DegreeTypeEnum.OTHER,
    ],
    default: DegreeTypeEnum.BACHELOR,
    nullable: true,
  })
  degreeType: string;

  @Column({ name: 'major', type: 'varchar', nullable: true })
  major: string;

  @Column({ name: 'gpa', type: 'double', nullable: true })
  gpa: number;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @OneToMany(() => FileEntity, (documents) => documents.education)
  documents: FileEntity[];

  @ManyToOne(() => ProfileEntity, (profile) => profile.educations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'profile_id' }])
  profile: ProfileEntity;

  @Column({ name: 'school_id', nullable: true })
  schoolId: number;

  @ManyToOne(() => CityEntity, (city) => city.educations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @ManyToOne(() => SchoolEntity, (school) => school.educations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;
}
