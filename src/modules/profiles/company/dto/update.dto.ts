import { PartialType } from '@nestjs/swagger';

import { CompanyDto } from './company';

export class UpdateCompanyDto extends PartialType(CompanyDto) {}
