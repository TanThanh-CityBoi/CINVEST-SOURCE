// Original file: src/proto/proto/merge.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';

export interface Merge {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'acquirerEquityPercentage'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number | string);
  'acquirer'?: (_companies_Company | null);
  'acquiree'?: (_companies_Company | null);
  'endDate'?: (string);
  'document'?: (_files_File | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_acquirerId'?: "acquirerId";
  '_acquireeId'?: "acquireeId";
  '_acquirerEquityPercentage'?: "acquirerEquityPercentage";
  '_announcedDate'?: "announcedDate";
  '_description'?: "description";
  '_value'?: "value";
  '_acquirer'?: "acquirer";
  '_acquiree'?: "acquiree";
  '_endDate'?: "endDate";
  '_document'?: "document";
}

export interface Merge__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'acquirerEquityPercentage'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number);
  'acquirer'?: (_companies_Company__Output | null);
  'acquiree'?: (_companies_Company__Output | null);
  'endDate'?: (string);
  'document'?: (_files_File__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_acquirerId': "acquirerId";
  '_acquireeId': "acquireeId";
  '_acquirerEquityPercentage': "acquirerEquityPercentage";
  '_announcedDate': "announcedDate";
  '_description': "description";
  '_value': "value";
  '_acquirer': "acquirer";
  '_acquiree': "acquiree";
  '_endDate': "endDate";
  '_document': "document";
}
