// Original file: src/proto/proto/album.proto

import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';

export interface Album {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'images'?: (_files_File)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_profileId'?: "profileId";
  '_companyId'?: "companyId";
}

export interface Album__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'images': (_files_File__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_profileId': "profileId";
  '_companyId': "companyId";
}
