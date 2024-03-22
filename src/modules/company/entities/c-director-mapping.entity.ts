import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { CompanyEntity } from './company.entity';

@Unique('company_director_unq', ['companyId', 'directorId'])
@Entity('company_director_mapping')
export class CompanyDirectorMapping extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'director_id', nullable: true })
  directorId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.directors, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (director) => director.directorCompanies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'director_id' })
  director: ProfileEntity;
}
