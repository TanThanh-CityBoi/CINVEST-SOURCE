import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('connections')
@Unique('user1_user2_index', ['followingId', 'followerId'])
export class ConnectionEntity extends BaseAbstractEntity {
  @Column({ name: 'following_id', nullable: true })
  followingId: number;

  @Column({ name: 'follower_id', nullable: true })
  followerId: number;

  @ManyToOne(() => UserEntity, (following) => following.followingList, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'following_id' })
  following: UserEntity;

  @ManyToOne(() => UserEntity, (follower) => follower.followerList, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'follower_id' })
  follower: UserEntity;
}
