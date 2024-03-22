// Original file: src/proto/proto/transfer.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';

export interface Transfer {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'transferDate'?: (string);
  'amount'?: (number | string);
  'totalValue'?: (number | string);
  'transfereeId'?: (number);
  'profileId'?: (number);
  'transferee'?: (_companies_Company | null);
  'profile'?: (_profiles_Profile | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_transferDate'?: "transferDate";
  '_amount'?: "amount";
  '_totalValue'?: "totalValue";
  '_transfereeId'?: "transfereeId";
  '_profileId'?: "profileId";
  '_transferee'?: "transferee";
  '_profile'?: "profile";
}

export interface Transfer__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'transferDate'?: (string);
  'amount'?: (number);
  'totalValue'?: (number);
  'transfereeId'?: (number);
  'profileId'?: (number);
  'transferee'?: (_companies_Company__Output | null);
  'profile'?: (_profiles_Profile__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_transferDate': "transferDate";
  '_amount': "amount";
  '_totalValue': "totalValue";
  '_transfereeId': "transfereeId";
  '_profileId': "profileId";
  '_transferee': "transferee";
  '_profile': "profile";
}
