// Original file: src/proto/proto/file.proto

import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_files_File | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_files_File__Output | null);
  '_data': "data";
}
