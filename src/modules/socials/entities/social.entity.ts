import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('socials')
export class SocialEntity extends BaseAbstractEntity {
  @Column({ name: 'url', type: 'varchar', nullable: true })
  url: string;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.socials, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.socials, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;
}
