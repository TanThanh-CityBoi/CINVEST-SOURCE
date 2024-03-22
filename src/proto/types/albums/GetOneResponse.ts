// Original file: src/proto/proto/album.proto

import type { Album as _albums_Album, Album__Output as _albums_Album__Output } from '../albums/Album';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_albums_Album | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_albums_Album__Output | null);
  '_data': "data";
}
