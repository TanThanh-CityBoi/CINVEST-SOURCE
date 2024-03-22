// Original file: src/proto/proto/campaign.proto

import type { Campaign as _campaigns_Campaign, Campaign__Output as _campaigns_Campaign__Output } from '../campaigns/Campaign';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_campaigns_Campaign | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_campaigns_Campaign__Output | null);
  '_data': "data";
}
