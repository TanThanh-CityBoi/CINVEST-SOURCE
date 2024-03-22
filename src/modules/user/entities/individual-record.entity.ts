import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Unique('individual_records_unq', ['profileId', 'userId'])
@Entity('individual_records')
export class IndividualRecordEntity extends BaseAbstractEntity {
  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.userRecordeds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(() => UserEntity, (user) => user.individualRecords, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
