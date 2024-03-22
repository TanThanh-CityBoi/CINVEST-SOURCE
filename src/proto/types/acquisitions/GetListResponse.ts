// Original file: src/proto/proto/acquisition.proto

import type { Acquisition as _acquisitions_Acquisition, Acquisition__Output as _acquisitions_Acquisition__Output } from '../acquisitions/Acquisition';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_acquisitions_Acquisition)[];
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
  'data': (_acquisitions_Acquisition__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
