import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { AcquisitionEntity } from '../../acquisitions/entities/acquisition.entity';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FundingRoundEntity } from '../../fundingRound/entities/fundingRound.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('recent_news')
export class RecentNewEntity extends BaseAbstractEntity {
  @Column({ type: 'varchar', nullable: true })
  url: string;

  @Column({ name: 'campaign_id', nullable: true })
  campaignId: number;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'fundingRound_id', nullable: true })
  fundingRoundId: number;

  @Column({ name: 'acquisition_id', nullable: true })
  acquisitionId: number;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'post_id', nullable: true })
  postId: number;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.recentNews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'campaign_id' })
  campaign: CampaignEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.recentNews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(
    () => FundingRoundEntity,
    (fundingRound) => fundingRound.recentNews,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'fundingRound_id' })
  fundingRound: FundingRoundEntity;

  @ManyToOne(() => AcquisitionEntity, (acquisition) => acquisition.recentNews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'acquisition_id' })
  acquisition: AcquisitionEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.recentNews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;
}
