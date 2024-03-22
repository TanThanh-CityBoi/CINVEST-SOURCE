import { PartialType } from '@nestjs/swagger';

import { RecentNewDto } from './recentNew.dto';

export class UpdateRecentNewDto extends PartialType(RecentNewDto) {}
