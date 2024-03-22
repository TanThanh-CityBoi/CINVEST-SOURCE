// Original file: src/proto/proto/area.proto

import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';

export interface Area {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countries'?: (_countries_Country)[];
  'mainArea'?: (string);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_mainArea'?: "mainArea";
}

export interface Area__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countries': (_countries_Country__Output)[];
  'mainArea'?: (string);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_mainArea': "mainArea";
}
