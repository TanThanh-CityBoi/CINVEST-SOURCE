// Original file: src/proto/proto/social.proto

import type { Service as _services_Service, Service__Output as _services_Service__Output } from '../services/Service';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_services_Service)[];
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
  'data': (_services_Service__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
