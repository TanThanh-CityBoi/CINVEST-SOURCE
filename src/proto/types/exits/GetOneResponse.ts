// Original file: src/proto/proto/exit.proto

import type { Exit as _exits_Exit, Exit__Output as _exits_Exit__Output } from '../exits/Exit';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_exits_Exit | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_exits_Exit__Output | null);
  '_data': "data";
}
