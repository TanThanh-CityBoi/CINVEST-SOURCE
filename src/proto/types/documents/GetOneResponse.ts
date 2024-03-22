// Original file: src/proto/proto/documents.proto

import type { Document as _documents_Document, Document__Output as _documents_Document__Output } from '../documents/Document';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_documents_Document | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_documents_Document__Output | null);
  '_data': "data";
}
