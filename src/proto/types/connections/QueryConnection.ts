// Original file: src/proto/proto/connection.proto


export interface QueryConnection {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sortBy'?: (string);
  'sortOrder'?: (string);
  'followingId'?: (number);
  'followerId'?: (number);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_page'?: "page";
  '_limit'?: "limit";
  '_sortBy'?: "sortBy";
  '_sortOrder'?: "sortOrder";
  '_followingId'?: "followingId";
  '_followerId'?: "followerId";
}

export interface QueryConnection__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sortBy'?: (string);
  'sortOrder'?: (string);
  'followingId'?: (number);
  'followerId'?: (number);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_page': "page";
  '_limit': "limit";
  '_sortBy': "sortBy";
  '_sortOrder': "sortOrder";
  '_followingId': "followingId";
  '_followerId': "followerId";
}
