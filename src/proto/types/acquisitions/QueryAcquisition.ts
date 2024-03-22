// Original file: src/proto/proto/acquisition.proto


export interface QueryAcquisition {
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
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number | string);
  'equity'?: (number);
  'endDate'?: (string);
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
  '_acquirerId'?: "acquirerId";
  '_acquireeId'?: "acquireeId";
  '_announcedDate'?: "announcedDate";
  '_description'?: "description";
  '_value'?: "value";
  '_equity'?: "equity";
  '_endDate'?: "endDate";
}

export interface QueryAcquisition__Output {
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
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number);
  'equity'?: (number);
  'endDate'?: (string);
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
  '_acquirerId': "acquirerId";
  '_acquireeId': "acquireeId";
  '_announcedDate': "announcedDate";
  '_description': "description";
  '_value': "value";
  '_equity': "equity";
  '_endDate': "endDate";
}
