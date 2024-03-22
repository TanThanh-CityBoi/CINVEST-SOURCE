// Original file: src/proto/proto/faq.proto

import type { FAQ as _faq_FAQ, FAQ__Output as _faq_FAQ__Output } from '../faq/FAQ';

export interface QAndA {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'question'?: (string);
  'answer'?: (string);
  'faqId'?: (number);
  'faq'?: (_faq_FAQ | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_question'?: "question";
  '_answer'?: "answer";
  '_faqId'?: "faqId";
  '_faq'?: "faq";
}

export interface QAndA__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'question'?: (string);
  'answer'?: (string);
  'faqId'?: (number);
  'faq'?: (_faq_FAQ__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_question': "question";
  '_answer': "answer";
  '_faqId': "faqId";
  '_faq': "faq";
}
