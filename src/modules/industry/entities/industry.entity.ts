import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyIndustryMappingEntity } from '../../company/entities/c-industry-mapping.entity';
import { CompanyNicheIndustryMappingEntity } from '../../company/entities/c-niche-industry-mapping.entity';
import { ProfileNicheIndustryMappingEntity } from '../../profile/entities/p-niche-industry-mapping.entity';
import { ServiceEntity } from '../../services/entities/service.entity';

@Entity('industries')
export class IndustryEntity extends BaseAbstractEntity {
  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'level1', type: 'varchar', nullable: true })
  level1: string;

  @Column({ name: 'level2', nullable: true })
  level2: number;

  @Column({ name: 'level3', nullable: true })
  level3: number;

  @Column({ name: 'level4', nullable: true })
  level4: number;

  @Column({ name: 'level5', nullable: true })
  level5: number;

  @OneToMany(
    () => CompanyIndustryMappingEntity,
    (companyMappings) => companyMappings.industry,
  )
  companyMappings: CompanyIndustryMappingEntity[];

  @OneToMany(() => ServiceEntity, (services) => services.industry)
  services: ServiceEntity[];

  @OneToMany(
    () => CompanyNicheIndustryMappingEntity,
    (companyMappings) => companyMappings.industry,
    {
      cascade: true,
    },
  )
  companyNicheMappings: CompanyNicheIndustryMappingEntity[];

  @OneToMany(
    () => ProfileNicheIndustryMappingEntity,
    (profiles) => profiles.industry,
    {
      cascade: true,
    },
  )
  profiles: ProfileNicheIndustryMappingEntity[];
}
