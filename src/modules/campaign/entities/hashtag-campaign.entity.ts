import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CampaignEntity } from './campaign.entity';

@Entity('hashtags_campaigns')
export class HashtagCampaignEntity extends BaseAbstractEntity {
  @Column({ name: 'hashtag_id' })
  hashtagId: number;

  @Column({ name: 'campaign_id' })
  campaignId: number;

  @ManyToOne(() => CampaignEntity, (entity) => entity.hashtags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'campaign_id' })
  campaigns: CampaignEntity[];
}
