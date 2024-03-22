import { FindOptionsRelations } from 'typeorm';

import { CampaignEntity } from './entities/campaign.entity';
import { CAMPAIGN_CATEGORY_ENUMS } from './enums/campaign.enums';

export const relations: FindOptionsRelations<CampaignEntity> = {
  company: true,
  recentNews: true,
  documents: true,
  faq: {
    qAndA: true,
  },
  bookmarks: true,
  hashtags: true,
};

export const relationsForList: FindOptionsRelations<CampaignEntity> = {
  bookmarks: true,
  hashtags: true,
};

export const generatePrefixCode = (category: string) => {
  let prefixCode = '';
  switch (category) {
    case CAMPAIGN_CATEGORY_ENUMS.BIDING:
      prefixCode = 'BID';
      break;
    case CAMPAIGN_CATEGORY_ENUMS.MA:
      prefixCode = 'MA';
      break;
    case CAMPAIGN_CATEGORY_ENUMS.EQUITY:
      prefixCode = 'EQ';
      break;
    case CAMPAIGN_CATEGORY_ENUMS.REWARD:
      prefixCode = 'RW';
      break;
    case CAMPAIGN_CATEGORY_ENUMS.SPONSOR:
      prefixCode = 'SP';
      break;
    default:
      prefixCode = 'TF';
      break;
  }
  return `#${prefixCode}`;
};

export const generateNumberCode = (id: number): string => {
  const str = '' + id;
  const pad = '000000';
  const ans = pad.substring(0, pad.length - str.length) + str;
  return ans;
};
