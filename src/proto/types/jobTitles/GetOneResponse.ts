// Original file: src/proto/proto/jobTitle.proto

import type { JobTitle as _jobTitles_JobTitle, JobTitle__Output as _jobTitles_JobTitle__Output } from '../jobTitles/JobTitle';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_jobTitles_JobTitle | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_jobTitles_JobTitle__Output | null);
  '_data': "data";
}
