// Original file: src/proto/proto/social.proto

import type { Service as _services_Service, Service__Output as _services_Service__Output } from '../services/Service';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_services_Service | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_services_Service__Output | null);
  '_data': "data";
}
