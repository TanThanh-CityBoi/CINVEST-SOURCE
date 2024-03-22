// Original file: src/proto/proto/faq.proto

import type { FAQ as _faq_FAQ, FAQ__Output as _faq_FAQ__Output } from '../faq/FAQ';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_faq_FAQ | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_faq_FAQ__Output | null);
  '_data': "data";
}
