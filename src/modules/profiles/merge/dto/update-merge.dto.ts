import { PartialType } from '@nestjs/swagger';

import { MergeDto } from './merge.dto';

export class UpdateMergeDto extends PartialType(MergeDto) {}
