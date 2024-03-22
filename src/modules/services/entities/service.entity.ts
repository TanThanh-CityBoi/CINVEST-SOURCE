import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { IndustryEntity } from '../../industry/entities/industry.entity';

@Entity('services')
export class ServiceEntity extends BaseAbstractEntity {
  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'logo', nullable: true })
  logo: string;

  @Column({ name: 'thumb', nullable: true })
  thumb: string;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'industry_id', nullable: true })
  industryId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.services, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => IndustryEntity, (industry) => industry.services, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'industry_id' })
  industry: IndustryEntity;

  @OneToMany(() => FileEntity, (files) => files.service, {
    cascade: true,
  })
  files: FileEntity[];
}
