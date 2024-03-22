// Original file: src/proto/proto/cooperation.proto

import type { Cooperation as _cooperations_Cooperation, Cooperation__Output as _cooperations_Cooperation__Output } from '../cooperations/Cooperation';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_cooperations_Cooperation | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_cooperations_Cooperation__Output | null);
  '_data': "data";
}
