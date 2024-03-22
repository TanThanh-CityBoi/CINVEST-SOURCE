// Original file: src/proto/proto/connection.proto

import type { Connection as _connections_Connection, Connection__Output as _connections_Connection__Output } from '../connections/Connection';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_connections_Connection | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_connections_Connection__Output | null);
  '_data': "data";
}
