// Original file: src/proto/proto/companyPeopleMapping.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { JobTitle as _jobTitles_JobTitle, JobTitle__Output as _jobTitles_JobTitle__Output } from '../jobTitles/JobTitle';

export interface CompanyPeopleMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'profileId'?: (number);
  'jobTitleId'?: (number);
  'company'?: (_companies_Company | null);
  'profile'?: (_profiles_Profile | null);
  'jobTitle'?: (_jobTitles_JobTitle | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_companyId'?: "companyId";
  '_profileId'?: "profileId";
  '_jobTitleId'?: "jobTitleId";
  '_company'?: "company";
  '_profile'?: "profile";
  '_jobTitle'?: "jobTitle";
}

export interface CompanyPeopleMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'companyId'?: (number);
  'profileId'?: (number);
  'jobTitleId'?: (number);
  'company'?: (_companies_Company__Output | null);
  'profile'?: (_profiles_Profile__Output | null);
  'jobTitle'?: (_jobTitles_JobTitle__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_companyId': "companyId";
  '_profileId': "profileId";
  '_jobTitleId': "jobTitleId";
  '_company': "company";
  '_profile': "profile";
  '_jobTitle': "jobTitle";
}
