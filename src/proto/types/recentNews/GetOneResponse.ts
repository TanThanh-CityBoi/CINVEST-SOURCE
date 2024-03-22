// Original file: src/proto/proto/recentNew.proto

import type { RecentNew as _recentNews_RecentNew, RecentNew__Output as _recentNews_RecentNew__Output } from '../recentNews/RecentNew';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_recentNews_RecentNew | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_recentNews_RecentNew__Output | null);
  '_data': "data";
}
