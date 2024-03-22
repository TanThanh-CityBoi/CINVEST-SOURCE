// Original file: src/proto/proto/area.proto

import type { Area as _areas_Area, Area__Output as _areas_Area__Output } from '../areas/Area';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_areas_Area | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_areas_Area__Output | null);
  '_data': "data";
}
