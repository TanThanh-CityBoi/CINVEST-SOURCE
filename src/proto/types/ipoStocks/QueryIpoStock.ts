// Original file: src/proto/proto/ipoStock.proto


export interface QueryIpoStock {
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
  'description'?: (string);
  'stockSymbol'?: (string);
  'ipoValue'?: (number | string);
  'ipoSharePrice'?: (number | string);
  'ipoDate'?: (string);
  'chartSource'?: (string);
  'companyId'?: (number);
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
  '_description'?: "description";
  '_stockSymbol'?: "stockSymbol";
  '_ipoValue'?: "ipoValue";
  '_ipoSharePrice'?: "ipoSharePrice";
  '_ipoDate'?: "ipoDate";
  '_chartSource'?: "chartSource";
  '_companyId'?: "companyId";
}

export interface QueryIpoStock__Output {
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
  'description'?: (string);
  'stockSymbol'?: (string);
  'ipoValue'?: (number);
  'ipoSharePrice'?: (number);
  'ipoDate'?: (string);
  'chartSource'?: (string);
  'companyId'?: (number);
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
  '_description': "description";
  '_stockSymbol': "stockSymbol";
  '_ipoValue': "ipoValue";
  '_ipoSharePrice': "ipoSharePrice";
  '_ipoDate': "ipoDate";
  '_chartSource': "chartSource";
  '_companyId': "companyId";
}
