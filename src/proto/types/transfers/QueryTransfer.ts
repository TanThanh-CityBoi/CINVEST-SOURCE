// Original file: src/proto/proto/transfer.proto


export interface QueryTransfer {
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
  'transferDate'?: (string);
  'amount'?: (number | string);
  'totalValue'?: (number | string);
  'transfereeId'?: (number);
  'profileId'?: (number);
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
  '_transferDate'?: "transferDate";
  '_amount'?: "amount";
  '_totalValue'?: "totalValue";
  '_transfereeId'?: "transfereeId";
  '_profileId'?: "profileId";
}

export interface QueryTransfer__Output {
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
  'transferDate'?: (string);
  'amount'?: (number);
  'totalValue'?: (number);
  'transfereeId'?: (number);
  'profileId'?: (number);
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
  '_transferDate': "transferDate";
  '_amount': "amount";
  '_totalValue': "totalValue";
  '_transfereeId': "transfereeId";
  '_profileId': "profileId";
}
