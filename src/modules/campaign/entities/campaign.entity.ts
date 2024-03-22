import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { FundingRoundEnum } from '../../../common/enums/enums';
import { CompanyEntity } from '../../company/entities/company.entity';
import { DocumentsEntity } from '../../documents/entities/documents.entity';
import { FAQEntity } from '../../faq/entities/faq.entity';
import { RecentNewEntity } from '../../recentNews/entities/recentNew.entity';
import { UserMappingEntity } from '../../user-mapping/entity/user-mapping.entity';
import {
  CAMPAIGN_CATEGORY_ENUMS,
  CAMPAIGN_TYPE_ENUMS
} from '../enums/campaign.enums';
import { HashtagCampaignEntity } from './hashtag-campaign.entity';

@Entity('campaigns')
export class CampaignEntity extends BaseAbstractEntity {
  @Column({ name: 'code', type: 'varchar', nullable: true })
  code: string;

  @Column({ name: 'company_picture', type: 'varchar', nullable: true })
  companyPicture: string;

  @Column({ name: 'banner_picture', type: 'varchar', nullable: true })
  bannerPicture: string;

  @Column({ name: 'total_investor', nullable: true })
  totalInvestor: number;

  @Column({ name: 'title', type: 'varchar', nullable: true })
  title: string;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'launch_date', type: 'timestamp', nullable: true })
  launchDate: Date;

  @Column({ name: 'end_date', type: 'timestamp', nullable: true })
  endDate: Date;

  @Column({ name: 'min_equity', nullable: true })
  minEquity: number;

  @Column({ name: 'min_amount', type: 'double', nullable: true })
  minAmount: number;

  @Column({ name: 'valuation_cap', type: 'double', nullable: true })
  valuationCap: number;

  @Column({ name: 'discount', nullable: true })
  discount: number;

  @Column({ name: 'funding_goal', type: 'double', nullable: true })
  fundingGoal: number;

  @Column({
    name: 'type',
    type: 'enum',
    enum: [CAMPAIGN_TYPE_ENUMS.ORGANIZATION, CAMPAIGN_TYPE_ENUMS.PERSONAL],
    nullable: true,
  })
  type: string;

  @Column({
    name: 'category',
    type: 'enum',
    enum: [
      CAMPAIGN_CATEGORY_ENUMS.BIDING,
      CAMPAIGN_CATEGORY_ENUMS.EQUITY,
      CAMPAIGN_CATEGORY_ENUMS.MA,
      CAMPAIGN_CATEGORY_ENUMS.REWARD,
      CAMPAIGN_CATEGORY_ENUMS.SPONSOR,
      CAMPAIGN_CATEGORY_ENUMS.TRANSFER,
    ],
    nullable: true,
  })
  category: string;

  @Column({
    name: 'round',
    type: 'enum',
    enum: [
      FundingRoundEnum.ALL,
      FundingRoundEnum.PRESEED,
      FundingRoundEnum.SEED,
      FundingRoundEnum.A,
      FundingRoundEnum.B,
      FundingRoundEnum.C,
      FundingRoundEnum.PREIPO,
      FundingRoundEnum.IPO,
      FundingRoundEnum.POSTIPO,
    ],
    default: FundingRoundEnum.ALL,
    nullable: true,
  })
  round: string;

  @Column({ name: 'pitch_title', type: 'varchar', nullable: true })
  pitchTitle: string;

  @Column({ name: 'pitch_description', type: 'longtext', nullable: true })
  pitchContent: string;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @Column({ name: 'country_name', nullable: true })
  countryName: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'city_name', nullable: true })
  cityName: string;

  @ManyToOne(() => CompanyEntity, (company) => company.campaigns, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @OneToMany(() => RecentNewEntity, (recentNews) => recentNews.campaign, {
    cascade: true,
  })
  recentNews: RecentNewEntity[];

  @OneToMany(() => DocumentsEntity, (documents) => documents.campaign, {
    cascade: true,
  })
  documents: DocumentsEntity[];

  @OneToMany(() => FAQEntity, (faq) => faq.campaign, {
    cascade: true,
  })
  faq: FAQEntity[];

  @ManyToMany(() => UserMappingEntity, (userMapping) => userMapping.campaigns, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    cascade: true,
  })
  bookmarks: UserMappingEntity[];

  @OneToMany(() => HashtagCampaignEntity, (hashtag) => hashtag.campaigns, {
    cascade: true,
  })
  hashtags: HashtagCampaignEntity[];
}
