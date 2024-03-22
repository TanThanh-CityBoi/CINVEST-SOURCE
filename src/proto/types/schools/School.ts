// Original file: src/proto/proto/school.proto

import type { Education as _educations_Education, Education__Output as _educations_Education__Output } from '../educations/Education';
import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';
import type { Country as _countries_Country, Country__Output as _countries_Country__Output } from '../countries/Country';

export interface School {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'cityId'?: (number);
  'educations'?: (_educations_Education)[];
  'city'?: (_cities_City | null);
  'country'?: (_countries_Country | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_name'?: "name";
  '_countryId'?: "countryId";
  '_cityId'?: "cityId";
  '_city'?: "city";
  '_country'?: "country";
}

export interface School__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'name'?: (string);
  'countryId'?: (number);
  'cityId'?: (number);
  'educations': (_educations_Education__Output)[];
  'city'?: (_cities_City__Output | null);
  'country'?: (_countries_Country__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_name': "name";
  '_countryId': "countryId";
  '_cityId': "cityId";
  '_city': "city";
  '_country': "country";
}
