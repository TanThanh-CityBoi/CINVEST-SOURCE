import { PartialType } from '@nestjs/swagger';

import { CampaignDto } from './campaign.dto';

export class UpdateCampaignDto extends PartialType(CampaignDto) {}
