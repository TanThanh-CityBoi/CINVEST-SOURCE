// Original file: src/proto/proto/education.proto

import type { Education as _educations_Education, Education__Output as _educations_Education__Output } from '../educations/Education';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_educations_Education | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_educations_Education__Output | null);
  '_data': "data";
}
