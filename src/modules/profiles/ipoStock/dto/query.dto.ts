import { IntersectionType, PickType } from '@nestjs/swagger';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

import { UpdateIpoStockDto } from './update.dto';

export class QueryIpoStockDto extends IntersectionType(
  PickType(UpdateIpoStockDto, [
    'ipoValue',
    'ipoSharePrice',
    'companyId',
    'stockSymbol',
    'description',
    'chartSource',
    'ipoDate',
  ]),
  BaseGetPaginateDto,
) {}
