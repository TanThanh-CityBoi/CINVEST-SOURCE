import { TPagination } from '../../common/base/pagination.interface';
import { ARCHIVE_RECORD_TYPE_ENUMS } from './enums/archiveRecord.enum';

export interface TQueryArchiveRecord extends TPagination {
  email: string;
  type?: ARCHIVE_RECORD_TYPE_ENUMS;
}
