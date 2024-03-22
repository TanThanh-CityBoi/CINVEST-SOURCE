// Original file: src/proto/proto/connection.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';

export interface Connection {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'followingId'?: (number);
  'followerId'?: (number);
  'follower'?: (_users_User | null);
  'following'?: (_users_User | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_followingId'?: "followingId";
  '_followerId'?: "followerId";
  '_follower'?: "follower";
  '_following'?: "following";
}

export interface Connection__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'followingId'?: (number);
  'followerId'?: (number);
  'follower'?: (_users_User__Output | null);
  'following'?: (_users_User__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_followingId': "followingId";
  '_followerId': "followerId";
  '_follower': "follower";
  '_following': "following";
}
