import { PartialType } from '@nestjs/swagger';

import { IpoStockDto } from './ipoStock.dto';

export class UpdateIpoStockDto extends PartialType(IpoStockDto) {}
