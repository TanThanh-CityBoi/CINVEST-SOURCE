import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
import {
  CATEGORY_DOCS_ENUM,
  PRIVACY_DOCS_ENUM,
} from '../enums/documents.enums';

@Entity('documents')
export class DocumentsEntity extends BaseAbstractEntity {
  @Column({ name: 'url', nullable: true })
  url: string;

  @Column({ name: 'size', nullable: true, type: 'integer' })
  size: number;

  @Column({ name: 'title', nullable: true })
  title: string;

  @Column({ name: 'description', type: 'longtext', nullable: true })
  description: string;

  @Column({
    name: 'category',
    type: 'enum',
    enum: [CATEGORY_DOCS_ENUM.COMPANY, CATEGORY_DOCS_ENUM.PROJECT],
    nullable: true,
  })
  category: string;

  @Column({
    name: 'privacy',
    type: 'enum',
    enum: [
      PRIVACY_DOCS_ENUM.ALREADY_INVESTED,
      PRIVACY_DOCS_ENUM.INDIVIDUAL_INVESTING,
      PRIVACY_DOCS_ENUM.INSTITUTIONAL_INVESTING,
      PRIVACY_DOCS_ENUM.PUBLIC,
    ],
    nullable: true,
  })
  privacy: string;

  @Column({ name: 'campaign_id', nullable: true })
  campaignId: number;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.documents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'campaign_id' })
  campaign: CampaignEntity;
}
