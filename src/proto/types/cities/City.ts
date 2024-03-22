// Original file: src/proto/proto/city.proto

import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';
import type { School as _schools_School, School__Output as _schools_School__Output } from '../schools/School';

export interface City {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'country'?: (_countries_Country | null);
  'schools'?: (_schools_School)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_countryId'?: "countryId";
  '_country'?: "country";
}

export interface City__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'country'?: (_countries_Country__Output | null);
  'schools': (_schools_School__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_countryId': "countryId";
  '_country': "country";
}
