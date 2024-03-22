// Original file: src/proto/proto/country.proto

import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';

export interface Country {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'cities'?: (_cities_City)[];
  'areaId'?: (number);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_countryId'?: "countryId";
  '_areaId'?: "areaId";
}

export interface Country__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'cities': (_cities_City__Output)[];
  'areaId'?: (number);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_countryId': "countryId";
  '_areaId': "areaId";
}
