import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { OrgMajorEnum } from '../../../common/enums/enums';
import { AcquisitionEntity } from '../../acquisitions/entities/acquisition.entity';
import { AlbumEntity } from '../../album/entities/album.entity';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';
import { CityEntity } from '../../city/entities/city.entity';
import { ExitEntity } from '../../exit/entities/exit.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';
import { FundingInvestorMappingEntity } from '../../fundingRound/entities/f-investor-mapping.entity';
import { FundingRoundEntity } from '../../fundingRound/entities/fundingRound.entity';
import { IpoStockEntity } from '../../ipoStock/entities/ipoStock.entity';
import { MergeEntity } from '../../merge/entities/merge.entity';
import { ProductEntity } from '../../products/entities/product.entity';
import { ServiceEntity } from '../../services/entities/service.entity';
import { SocialEntity } from '../../socials/entities/social.entity';
import { TransferEntity } from '../../transfer/entities/transfer.entity';

import { HashtagCompanyEntity } from '../../campaign/entities/hashtag-company.entity';
import { RecentNewEntity } from '../../recentNews/entities/recentNew.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { CompanyChiefMapping } from './c-chief-mapping.entity';
import { CompanyCooperationMappingEntity } from './c-cooperateion-mapping.entity';
import { CompanyDirectorMapping } from './c-director-mapping.entity';
import { CompanyFounderMapping } from './c-founder-mapping.entity';
import { CompanyIndustryMappingEntity } from './c-industry-mapping.entity';
import { CompanyPeopleMappingEntity } from './c-people-mapping.entity';
import { CompanyNicheIndustryMappingEntity } from './c-niche-industry-mapping.entity';
import { CompanyInvestLocationMappingEntity } from './c-invest-location-mapping.entity';
import { OrganizationRecordEntity } from '../../user/entities/organization-record.entity';

@Entity('companies')
export class CompanyEntity extends BaseAbstractEntity {
  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({
    name: 'second_name',
    unique: true,
    type: 'varchar',
    nullable: true,
  })
  secondName: string;

  @Column({ name: 'hashtag', type: 'varchar', nullable: true })
  hashtag: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: [
      OrgMajorEnum.COMPANY,
      OrgMajorEnum.INCUBATOR,
      OrgMajorEnum.VENTURE_CAPITAL,
      OrgMajorEnum.HUB,
      OrgMajorEnum.SCHOOL,
      OrgMajorEnum.OTHER,
    ],
    nullable: true,
    default: OrgMajorEnum.COMPANY,
  })
  type: string;

  @Column({ name: 'authorized_capital', type: 'double', nullable: true })
  authorizedCapital: number;

  @Column({ name: 'register_date', type: 'date', nullable: true })
  registerDate: Date;

  @Column({ name: 'deregister_date', type: 'date', nullable: true })
  deregisterDate: Date;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'tax_number', unique: true, nullable: true, type: 'varchar' })
  taxNumber: string;

  @Column({ name: 'contact_number', type: 'varchar', nullable: true })
  contactNumber: string;

  @Column({ name: 'establishment_decision', type: 'varchar', nullable: true })
  establishmentDecision: string;

  @Column({ name: 'reponsible_authority', type: 'varchar', nullable: true })
  responsibleAuthority: string;

  @Column({ name: 'employee_number', nullable: true })
  employeeNumber: number;

  @Column({ name: 'street_address', nullable: true, type: 'varchar' })
  streetAddress: string;

  @Column({ name: 'ward_id', nullable: true })
  wardId: number;

  @Column({ name: 'district_id', nullable: true })
  districtId: number;

  @Column({ name: 'headquarter_place_id', nullable: true })
  headquarterPlaceId: number;

  @Column({ name: 'management_place_id', nullable: true })
  managementPlaceId: number;

  @Column({ name: 'tax_place_id', nullable: true })
  taxPlaceId: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ name: 'ipo_stock_id', nullable: true })
  ipoStockId: number;

  @Column({ name: 'parent_id', nullable: true })
  parentId: number;

  @Column({ name: 'industry_id', nullable: true })
  industryId: number;

  @Column({ name: 'min_range', type: 'double', nullable: true })
  minRange: number;

  @Column({ name: 'max_range', type: 'double', nullable: true })
  maxRange: number;

  @OneToOne(() => UserEntity, (user) => user.company, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToOne(() => IpoStockEntity, (ipoStock) => ipoStock.company, {
    cascade: true,
  })
  ipoStock: IpoStockEntity;

  @OneToMany(
    () => CompanyIndustryMappingEntity,
    (industries) => industries.company,
    {
      cascade: true,
    },
  )
  industries: CompanyIndustryMappingEntity[];

  @OneToMany(
    () => CompanyNicheIndustryMappingEntity,
    (industries) => industries.company,
    {
      cascade: true,
    },
  )
  niches: CompanyNicheIndustryMappingEntity[];

  @OneToMany(
    () => CompanyInvestLocationMappingEntity,
    (industries) => industries.company,
    {
      cascade: true,
    },
  )
  investLocations: CompanyInvestLocationMappingEntity[];

  @ManyToOne(
    () => CityEntity,
    (headquarterPlace) => headquarterPlace.headquarterCompanies,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'headquarter_place_id' })
  headquarterPlace: CityEntity;

  @ManyToOne(
    () => CityEntity,
    (managementPlace) => managementPlace.managementCompanies,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'management_place_id' })
  managementPlace: CityEntity;

  @ManyToOne(() => CityEntity, (taxPlace) => taxPlace.taxCompanies, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'tax_place_id' })
  taxPlace: CityEntity;

  @OneToMany(() => AlbumEntity, (albums) => albums.company, {
    cascade: true,
  })
  albums: AlbumEntity[];

  @OneToMany(() => TransferEntity, (transfers) => transfers.transferee)
  transfers: TransferEntity[];

  @OneToMany(() => ExitEntity, (exits) => exits.company)
  exits: ExitEntity[];

  @OneToMany(
    () => FundingRoundEntity,
    (fundingRounds) => fundingRounds.investee,
  )
  fundingRounds: FundingRoundEntity[];

  @OneToMany(() => CompanyFounderMapping, (founders) => founders.company, {
    cascade: true,
  })
  founders: CompanyFounderMapping[];

  @OneToMany(() => CompanyDirectorMapping, (directors) => directors.company, {
    cascade: true,
  })
  directors: CompanyDirectorMapping[];

  @OneToMany(() => CompanyChiefMapping, (chiefs) => chiefs.company, {
    cascade: true,
  })
  chiefs: CompanyChiefMapping[];

  @OneToMany(
    () => ExperienceEntity,
    (experiences) => experiences.organization,
    {
      cascade: true,
    },
  )
  employees: ExperienceEntity[];

  @OneToMany(() => CompanyPeopleMappingEntity, (people) => people.company, {
    cascade: true,
  })
  people: CompanyPeopleMappingEntity[];

  @OneToMany(
    () => FundingInvestorMappingEntity,
    (investedFundingRounds) => investedFundingRounds.organization,
    {
      cascade: true,
    },
  )
  investedFundingRounds: FundingInvestorMappingEntity[];

  @OneToMany(() => ServiceEntity, (services) => services.company, {
    cascade: true,
  })
  services: ServiceEntity[];

  @OneToMany(() => ProductEntity, (products) => products.company, {
    cascade: true,
  })
  products: ProductEntity[];

  @OneToMany(() => MergeEntity, (merges) => merges.acquirer, {
    cascade: true,
  })
  merges: MergeEntity[];

  @OneToMany(() => MergeEntity, (soldMergers) => soldMergers.acquiree, {
    cascade: true,
  })
  soldMergers: MergeEntity[];

  @OneToMany(
    () => AcquisitionEntity,
    (acquisitions) => acquisitions.acqAcquirer,
    {
      cascade: true,
    },
  )
  acquisitions: AcquisitionEntity[];

  @OneToMany(
    () => AcquisitionEntity,
    (soldAcquisitions) => soldAcquisitions.acqAcquiree,
    {
      cascade: true,
    },
  )
  soldAcquisitions: AcquisitionEntity[];

  @OneToMany(
    () => CompanyCooperationMappingEntity,
    (cooperations) => cooperations.cooperation,
    {
      cascade: true,
    },
  )
  cooperations: CompanyCooperationMappingEntity[];

  @OneToMany(() => SocialEntity, (socials) => socials.company, {
    cascade: true,
  })
  socials: SocialEntity[];

  parent: CompanyEntity | null;

  @OneToMany(() => CampaignEntity, (campaigns) => campaigns.company)
  campaigns: CampaignEntity[];

  @OneToMany(() => HashtagCompanyEntity, (hashtag) => hashtag.companies, {
    cascade: true,
  })
  hashtags: HashtagCompanyEntity[];

  @OneToMany(() => RecentNewEntity, (recentNews) => recentNews.company)
  recentNews: RecentNewEntity[];

  @OneToMany(() => OrganizationRecordEntity, (records) => records.company, {
    cascade: true,
  })
  userRecordeds: OrganizationRecordEntity[];
}
