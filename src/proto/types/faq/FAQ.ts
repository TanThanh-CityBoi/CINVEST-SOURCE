// Original file: src/proto/proto/faq.proto

import type { Campaign as _campaigns_Campaign, Campaign__Output as _campaigns_Campaign__Output } from '../campaigns/Campaign';
import type { QAndA as _faq_QAndA, QAndA__Output as _faq_QAndA__Output } from '../faq/QAndA';

export interface FAQ {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign | null);
  'category'?: (string);
  'qAndA'?: (_faq_QAndA)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_campaignId'?: "campaignId";
  '_campaign'?: "campaign";
  '_category'?: "category";
}

export interface FAQ__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign__Output | null);
  'category'?: (string);
  'qAndA': (_faq_QAndA__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_campaignId': "campaignId";
  '_campaign': "campaign";
  '_category': "category";
}
