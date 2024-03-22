import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
import { QAndAEntity } from './question-awser.entity';

@Entity('faqs')
export class FAQEntity extends BaseAbstractEntity {
  @Column({
    name: 'category',
    nullable: true,
  })
  category: string;

  @Column({ name: 'campaign_id', nullable: true })
  campaignId: number;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.faq, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'campaign_id' })
  campaign: CampaignEntity;

  @OneToMany(() => QAndAEntity, (qAndA) => qAndA.faq, {
    cascade: true,
  })
  qAndA: QAndAEntity[];
}
