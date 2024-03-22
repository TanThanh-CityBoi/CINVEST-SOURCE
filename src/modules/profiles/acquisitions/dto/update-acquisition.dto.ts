import { PartialType } from '@nestjs/swagger';

import { AcquisitionDto } from './acquisition.dto';

export class UpdateAcquisitionDto extends PartialType(AcquisitionDto) {}
