// Original file: src/proto/proto/archiveRecord.proto

import type { ArchiveRecord as _archiveRecords_ArchiveRecord, ArchiveRecord__Output as _archiveRecords_ArchiveRecord__Output } from '../archiveRecords/ArchiveRecord';

export interface GetListResponse {
  'message'?: (string);
  'totalItems'?: (number);
  'perPage'?: (number);
  'totalPages'?: (number);
  'page'?: (number);
  'data'?: (_archiveRecords_ArchiveRecord)[];
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
  'data': (_archiveRecords_ArchiveRecord__Output)[];
  '_totalItems': "totalItems";
  '_perPage': "perPage";
  '_totalPages': "totalPages";
  '_page': "page";
}
