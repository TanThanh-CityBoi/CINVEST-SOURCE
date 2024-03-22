// Original file: src/proto/proto/documents.proto

import type { Campaign as _campaigns_Campaign, Campaign__Output as _campaigns_Campaign__Output } from '../campaigns/Campaign';
import type { Long } from '@grpc/proto-loader';

export interface Document {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'url'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign | null);
  'title'?: (string);
  'description'?: (string);
  'category'?: (string);
  'privacy'?: (string);
  'size'?: (number | string | Long);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_url'?: "url";
  '_campaignId'?: "campaignId";
  '_campaign'?: "campaign";
  '_title'?: "title";
  '_description'?: "description";
  '_category'?: "category";
  '_privacy'?: "privacy";
  '_size'?: "size";
}

export interface Document__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'url'?: (string);
  'campaignId'?: (number);
  'campaign'?: (_campaigns_Campaign__Output | null);
  'title'?: (string);
  'description'?: (string);
  'category'?: (string);
  'privacy'?: (string);
  'size'?: (string);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_url': "url";
  '_campaignId': "campaignId";
  '_campaign': "campaign";
  '_title': "title";
  '_description': "description";
  '_category': "category";
  '_privacy': "privacy";
  '_size': "size";
}
