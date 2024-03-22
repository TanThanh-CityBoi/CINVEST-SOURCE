// Original file: src/proto/proto/user.proto


export interface QueryUser {
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
  'email'?: (string);
  'phone'?: (string);
  'role'?: (string);
  'profileType'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'sub'?: (string);
  'ids'?: (number)[];
  'subs'?: (string)[];
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
  '_email'?: "email";
  '_phone'?: "phone";
  '_role'?: "role";
  '_profileType'?: "profileType";
  '_profileId'?: "profileId";
  '_companyId'?: "companyId";
  '_sub'?: "sub";
}

export interface QueryUser__Output {
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
  'email'?: (string);
  'phone'?: (string);
  'role'?: (string);
  'profileType'?: (string);
  'profileId'?: (number);
  'companyId'?: (number);
  'sub'?: (string);
  'ids': (number)[];
  'subs': (string)[];
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
  '_email': "email";
  '_phone': "phone";
  '_role': "role";
  '_profileType': "profileType";
  '_profileId': "profileId";
  '_companyId': "companyId";
  '_sub': "sub";
}
