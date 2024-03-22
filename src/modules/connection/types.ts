import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { UserEntity } from '../user/entities/user.entity';

export interface TQueryConnection extends TPagination {
  followingId?: number;
  followerId?: number;
}
export interface TConnection extends TBaseAbstract {
  followingId?: number;
  followerId?: number;
  following?: UserEntity;
  follower?: UserEntity;
}
