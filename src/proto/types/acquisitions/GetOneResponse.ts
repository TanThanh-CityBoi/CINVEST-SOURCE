// Original file: src/proto/proto/acquisition.proto

import type { Acquisition as _acquisitions_Acquisition, Acquisition__Output as _acquisitions_Acquisition__Output } from '../acquisitions/Acquisition';

export interface GetOneResponse {
  'message'?: (string);
  'data'?: (_acquisitions_Acquisition | null);
  '_data'?: "data";
}

export interface GetOneResponse__Output {
  'message': (string);
  'data'?: (_acquisitions_Acquisition__Output | null);
  '_data': "data";
}
