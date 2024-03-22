// Original file: src/proto/proto/user.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_users_User | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_users_User__Output | null);
  '_data': "data";
}
