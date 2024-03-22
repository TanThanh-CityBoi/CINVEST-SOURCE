import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { ARCHIVE_RECORD_TYPE_ENUMS } from '../enums/archive-records.enum';

export class QueryArchiveRecordDto extends BaseGetPaginateDto {
  @ApiPropertyOptional({
    type: ARCHIVE_RECORD_TYPE_ENUMS,
  })
  @IsOptional()
  type: ARCHIVE_RECORD_TYPE_ENUMS;
}
