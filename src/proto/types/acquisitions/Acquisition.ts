// Original file: src/proto/proto/acquisition.proto

import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { File as _files_File, File__Output as _files_File__Output } from '../files/File';
import type { RecentNew as _recentNews_RecentNew, RecentNew__Output as _recentNews_RecentNew__Output } from '../recentNews/RecentNew';

export interface Acquisition {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'newAcquireeId'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number | string);
  'equity'?: (number);
  'acqAcquirer'?: (_companies_Company | null);
  'acqAcquiree'?: (_companies_Company | null);
  'newAcqAcquiree'?: (_companies_Company | null);
  'endDate'?: (string);
  'documents'?: (_files_File)[];
  'recentNews'?: (_recentNews_RecentNew)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_acquirerId'?: "acquirerId";
  '_acquireeId'?: "acquireeId";
  '_newAcquireeId'?: "newAcquireeId";
  '_announcedDate'?: "announcedDate";
  '_description'?: "description";
  '_value'?: "value";
  '_equity'?: "equity";
  '_acqAcquirer'?: "acqAcquirer";
  '_acqAcquiree'?: "acqAcquiree";
  '_newAcqAcquiree'?: "newAcqAcquiree";
  '_endDate'?: "endDate";
}

export interface Acquisition__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'acquirerId'?: (number);
  'acquireeId'?: (number);
  'newAcquireeId'?: (number);
  'announcedDate'?: (string);
  'description'?: (string);
  'value'?: (number);
  'equity'?: (number);
  'acqAcquirer'?: (_companies_Company__Output | null);
  'acqAcquiree'?: (_companies_Company__Output | null);
  'newAcqAcquiree'?: (_companies_Company__Output | null);
  'endDate'?: (string);
  'documents': (_files_File__Output)[];
  'recentNews': (_recentNews_RecentNew__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_acquirerId': "acquirerId";
  '_acquireeId': "acquireeId";
  '_newAcquireeId': "newAcquireeId";
  '_announcedDate': "announcedDate";
  '_description': "description";
  '_value': "value";
  '_equity': "equity";
  '_acqAcquirer': "acqAcquirer";
  '_acqAcquiree': "acqAcquiree";
  '_newAcqAcquiree': "newAcqAcquiree";
  '_endDate': "endDate";
}
