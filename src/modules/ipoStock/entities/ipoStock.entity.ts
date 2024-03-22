import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';

@Entity('ipo_stocks')
export class IpoStockEntity extends BaseAbstractEntity {
  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'stock_symbol', type: 'varchar', nullable: true })
  stockSymbol: string;

  @Column({ name: 'ipo_value', type: 'double', nullable: true })
  ipoValue: number;

  @Column({ name: 'ipo_share_price', type: 'double', nullable: true })
  ipoSharePrice: number;

  @Column({ name: 'ipo_date', type: 'date', nullable: true })
  ipoDate: Date;

  @Column({ name: 'chart_source', type: 'varchar', nullable: true })
  chartSource: string;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @OneToOne(() => CompanyEntity, (company) => company.ipoStock, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;
}
