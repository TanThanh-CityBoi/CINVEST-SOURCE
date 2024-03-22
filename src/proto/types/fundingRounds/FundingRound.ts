// Original file: src/proto/proto/fundingRound.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';
import type { FundingInvestorMapping as _fundingRounds_FundingInvestorMapping, FundingInvestorMapping__Output as _fundingRounds_FundingInvestorMapping__Output } from '../fundingRounds/FundingInvestorMapping';
import type { RecentNew as _recentNews_RecentNew, RecentNew__Output as _recentNews_RecentNew__Output } from '../recentNews/RecentNew';

export interface FundingRound {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'investeeId'?: (number);
  'announcedDate'?: (string);
  'round'?: (string);
  'type'?: (string);
  'preMoney'?: (number | string);
  'moneyRaised'?: (number | string);
  'description'?: (string);
  'investee'?: (_companies_Company | null);
  'documents'?: (_files_File)[];
  'investors'?: (_fundingRounds_FundingInvestorMapping)[];
  'recentNews'?: (_recentNews_RecentNew)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_investeeId'?: "investeeId";
  '_announcedDate'?: "announcedDate";
  '_round'?: "round";
  '_type'?: "type";
  '_preMoney'?: "preMoney";
  '_moneyRaised'?: "moneyRaised";
  '_description'?: "description";
  '_investee'?: "investee";
}

export interface FundingRound__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'investeeId'?: (number);
  'announcedDate'?: (string);
  'round'?: (string);
  'type'?: (string);
  'preMoney'?: (number);
  'moneyRaised'?: (number);
  'description'?: (string);
  'investee'?: (_companies_Company__Output | null);
  'documents': (_files_File__Output)[];
  'investors': (_fundingRounds_FundingInvestorMapping__Output)[];
  'recentNews': (_recentNews_RecentNew__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_investeeId': "investeeId";
  '_announcedDate': "announcedDate";
  '_round': "round";
  '_type': "type";
  '_preMoney': "preMoney";
  '_moneyRaised': "moneyRaised";
  '_description': "description";
  '_investee': "investee";
}
