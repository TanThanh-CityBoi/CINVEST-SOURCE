// Original file: src/proto/proto/hashtags.proto

import type { HashTag as _news_HashTag, HashTag__Output as _news_HashTag__Output } from '../news/HashTag';

export interface ListHashTag {
  'data'?: (_news_HashTag)[];
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
}

export interface ListHashTag__Output {
  'data': (_news_HashTag__Output)[];
  'totalItems': (number);
  'perPage': (number);
  'totalPages': (number);
  'page': (number);
}
