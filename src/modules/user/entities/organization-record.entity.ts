import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Unique('organization_records_unq', ['companyId', 'userId'])
@Entity('organization_records')
export class OrganizationRecordEntity extends BaseAbstractEntity {
  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @ManyToOne(() => CompanyEntity, (company) => company.userRecordeds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => UserEntity, (user) => user.organizationRecords, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
