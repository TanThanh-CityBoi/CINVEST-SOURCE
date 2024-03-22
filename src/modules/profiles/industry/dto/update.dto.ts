import { PartialType } from '@nestjs/swagger';

import { IndustryDto } from './industry.dto';

export class UpdateIndustryDto extends PartialType(IndustryDto) {}
