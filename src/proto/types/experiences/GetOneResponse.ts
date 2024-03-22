// Original file: src/proto/proto/experience.proto

import type { Experience as _experiences_Experience, Experience__Output as _experiences_Experience__Output } from '../experiences/Experience';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_experiences_Experience | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_experiences_Experience__Output | null);
  '_data': "data";
}
