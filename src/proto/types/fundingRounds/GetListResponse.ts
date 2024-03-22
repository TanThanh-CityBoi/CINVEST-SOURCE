// Original file: src/proto/proto/fundingRound.proto

import type { FundingRound as _fundingRounds_FundingRound, FundingRound__Output as _fundingRounds_FundingRound__Output } from '../fundingRounds/FundingRound';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_fundingRounds_FundingRound)[];
  '_totalItems'?: "totalItems";
  '_perPage'?: "perPage";
  '_totalPages'?: "totalPages";
  '_page'?: "page";
}

export interface GetListResponse__Output {
  'message': (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data': (_fundingRounds_FundingRound__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
