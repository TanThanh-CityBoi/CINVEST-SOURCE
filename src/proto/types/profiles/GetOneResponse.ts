// Original file: src/proto/proto/profile.proto

import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_profiles_Profile | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_profiles_Profile__Output | null);
  '_data': "data";
}
