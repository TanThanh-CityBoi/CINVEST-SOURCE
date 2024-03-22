// Original file: src/proto/proto/statistic.proto

import type { Statistic as _statistic_Statistic, Statistic__Output as _statistic_Statistic__Output } from '../statistic/Statistic';

export interface GetResponse {
  'message'?: (string);
  'data'?: (_statistic_Statistic | null);
  '_data'?: "data";
}

export interface GetResponse__Output {
  'message': (string);
  'data'?: (_statistic_Statistic__Output | null);
  '_data': "data";
}
