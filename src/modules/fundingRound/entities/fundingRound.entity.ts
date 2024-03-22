import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import {
  FundingRoundEnum,
  InvestmentTypeEnum,
} from '../../../common/enums/enums';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { RecentNewEntity } from '../../recentNews/entities/recentNew.entity';
import { FundingRoundRecordEntity } from '../../user/entities/funding-round-record.entity';
import { FundingInvestorMappingEntity } from './f-investor-mapping.entity';

@Entity('funding_rounds')
export class FundingRoundEntity extends BaseAbstractEntity {
  @Column({
    name: 'investee_id',
    nullable: true,
  })
  investeeId: number;

  @Column({
    name: 'announced_date',
    type: 'date',
    nullable: true,
  })
  announcedDate: Date;

  @Column({
    name: 'round',
    type: 'enum',
    enum: [
      FundingRoundEnum.ALL,
      FundingRoundEnum.PRESEED,
      FundingRoundEnum.SEED,
      FundingRoundEnum.A,
      FundingRoundEnum.B,
      FundingRoundEnum.C,
      FundingRoundEnum.PREIPO,
      FundingRoundEnum.IPO,
      FundingRoundEnum.POSTIPO,
    ],
    default: FundingRoundEnum.ALL,
    nullable: true,
  })
  round: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: [
      InvestmentTypeEnum.ACQUISITION,
      InvestmentTypeEnum.MA,
      InvestmentTypeEnum.EQUITY,
    ],
    default: InvestmentTypeEnum.EQUITY,
    nullable: true,
  })
  type: string;

  @Column({ name: 'pre-money', type: 'double', nullable: true })
  preMoney: number;

  @Column({ name: 'money-raised', type: 'double', nullable: true })
  moneyRaised: number;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @ManyToOne(() => CompanyEntity, (investee) => investee.fundingRounds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'investee_id' })
  investee: CompanyEntity;

  @OneToMany(() => FileEntity, (documents) => documents.fundingRound, {
    cascade: true,
  })
  documents: FileEntity[];

  @OneToMany(
    () => FundingInvestorMappingEntity,
    (investors) => investors.fundingRound,
    {
      cascade: true,
    },
  )
  investors: FundingInvestorMappingEntity[];

  @OneToMany(() => RecentNewEntity, (recentNews) => recentNews.fundingRound, {
    cascade: true,
  })
  recentNews: RecentNewEntity[];

  @OneToMany(
    () => FundingRoundRecordEntity,
    (records) => records.fundingRound,
    {
      cascade: true,
    },
  )
  userRecordeds: FundingRoundRecordEntity[];
}
