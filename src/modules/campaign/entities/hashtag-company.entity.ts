import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';

@Entity('hashtags_companies')
export class HashtagCompanyEntity extends BaseAbstractEntity {
  @Column({ name: 'hashtag_id' })
  hashtagId: number;

  @Column({ name: 'company_id' })
  companyId: number;

  @ManyToOne(() => CompanyEntity, (entity) => entity.hashtags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  companies: CompanyEntity[];
}
