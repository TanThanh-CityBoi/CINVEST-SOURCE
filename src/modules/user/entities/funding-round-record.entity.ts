import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { FundingRoundEntity } from '../../fundingRound/entities/fundingRound.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Unique('funding_round_records_unq', ['fundingRoundId', 'userId'])
@Entity('funding_round_records')
export class FundingRoundRecordEntity extends BaseAbstractEntity {
  @Column({ name: 'funding_round_id', nullable: true })
  fundingRoundId: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @ManyToOne(
    () => FundingRoundEntity,
    (fundingRound) => fundingRound.userRecordeds,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'funding_round_id' })
  fundingRound: FundingRoundEntity;

  @ManyToOne(() => UserEntity, (user) => user.fundingRoundRecords, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
