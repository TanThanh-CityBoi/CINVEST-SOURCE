// Original file: src/proto/proto/hashtags.proto


export interface GetHashTagRequest {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (number);
  'updatedBy'?: (number);
  'state'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sortBy'?: (string);
  'sortOrder'?: (string);
  'name'?: (string);
  'ids'?: (number)[];
}

export interface GetHashTagRequest__Output {
  'id': (number);
  'createdAt': (string);
  'updatedAt': (string);
  'createdBy': (number);
  'updatedBy': (number);
  'state': (string);
  'page': (number);
  'limit': (number);
  'sortBy': (string);
  'sortOrder': (string);
  'name': (string);
  'ids': (number)[];
}
