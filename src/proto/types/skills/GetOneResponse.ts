// Original file: src/proto/proto/skill.proto

import type { Skill as _skills_Skill, Skill__Output as _skills_Skill__Output } from '../skills/Skill';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_skills_Skill | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_skills_Skill__Output | null);
  '_data': "data";
}
