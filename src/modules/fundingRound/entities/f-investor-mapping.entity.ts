import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { FundingRoundEntity } from './fundingRound.entity';

@Entity('funding_investor_mapping')
export class FundingInvestorMappingEntity extends BaseAbstractEntity {
  @Column({ name: 'funding_round_id', nullable: true })
  fundingRoundId: number;

  @Column({ name: 'org_id', nullable: true })
  orgId: number;

  @Column({ name: 'ind_id', nullable: true })
  indId: number;

  @Column({ name: 'lead_id', nullable: true })
  leadId: number;

  @Column({ name: 'amount', type: 'double', nullable: true })
  amount: number;

  @Column({ name: 'start_date', type: 'date', nullable: true })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate: Date;

  @ManyToOne(
    () => FundingRoundEntity,
    (fundingRound) => fundingRound.investors,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'funding_round_id' })
  fundingRound: FundingRoundEntity;

  @ManyToOne(
    () => CompanyEntity,
    (organization) => organization.investedFundingRounds,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'org_id' })
  organization: CompanyEntity;

  @ManyToOne(
    () => ProfileEntity,
    (individual) => individual.investedFundingRounds,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ind_id' })
  individual: ProfileEntity;

  @ManyToOne(
    () => ProfileEntity,
    (leadInvestor) => leadInvestor.investedFundingRounds,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'lead_id' })
  leadInvestor: ProfileEntity;
}
