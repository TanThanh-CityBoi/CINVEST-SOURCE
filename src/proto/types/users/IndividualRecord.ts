// Original file: src/proto/proto/individualRecord.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface IndividualRecord {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'profileId'?: (number);
  'user'?: (_users_User | null);
  'profile'?: (_profiles_Profile | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_userId'?: "userId";
  '_profileId'?: "profileId";
  '_user'?: "user";
  '_profile'?: "profile";
}

export interface IndividualRecord__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'profileId'?: (number);
  'user'?: (_users_User__Output | null);
  'profile'?: (_profiles_Profile__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_userId': "userId";
  '_profileId': "profileId";
  '_user': "user";
  '_profile': "profile";
}
