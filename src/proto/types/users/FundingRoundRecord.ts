// Original file: src/proto/proto/fundingRoundRecord.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { FundingRound as _fundingRounds_FundingRound, FundingRound__Output as _fundingRounds_FundingRound__Output } from '../fundingRounds/FundingRound';

export interface FundingRoundRecord {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'fundingRoundId'?: (number);
  'user'?: (_users_User | null);
  'fundingRound'?: (_fundingRounds_FundingRound | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_userId'?: "userId";
  '_fundingRoundId'?: "fundingRoundId";
  '_user'?: "user";
  '_fundingRound'?: "fundingRound";
}

export interface FundingRoundRecord__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'userId'?: (number);
  'fundingRoundId'?: (number);
  'user'?: (_users_User__Output | null);
  'fundingRound'?: (_fundingRounds_FundingRound__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_userId': "userId";
  '_fundingRoundId': "fundingRoundId";
  '_user': "user";
  '_fundingRound': "fundingRound";
}
