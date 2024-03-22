import { DataSource, DataSourceOptions } from 'typeorm';

import { AcquisitionEntity } from '../modules/acquisitions/entities/acquisition.entity';
import { AlbumEntity } from '../modules/album/entities/album.entity';
import { AreaEntity } from '../modules/area/entities/area.entity';
import { CampaignEntity } from '../modules/campaign/entities/campaign.entity';
import { HashtagCampaignEntity } from '../modules/campaign/entities/hashtag-campaign.entity';
import { HashtagCompanyEntity } from '../modules/campaign/entities/hashtag-company.entity';
import { CityEntity } from '../modules/city/entities/city.entity';
import { CompanyChiefMapping } from '../modules/company/entities/c-chief-mapping.entity';
import { CompanyCooperationMappingEntity } from '../modules/company/entities/c-cooperateion-mapping.entity';
import { CompanyDirectorMapping } from '../modules/company/entities/c-director-mapping.entity';
import { CompanyFounderMapping } from '../modules/company/entities/c-founder-mapping.entity';
import { CompanyIndustryMappingEntity } from '../modules/company/entities/c-industry-mapping.entity';
import { CompanyInvestLocationMappingEntity } from '../modules/company/entities/c-invest-location-mapping.entity';
import { CompanyNicheIndustryMappingEntity } from '../modules/company/entities/c-niche-industry-mapping.entity';
import { CompanyPeopleMappingEntity } from '../modules/company/entities/c-people-mapping.entity';
import { CompanyEntity } from '../modules/company/entities/company.entity';
import { ConnectionEntity } from '../modules/connection/entities/connection.entity';
import { CountryEntity } from '../modules/country/entities/country.entity';
import { DocumentsEntity } from '../modules/documents/entities/documents.entity';
import { EducationEntity } from '../modules/education/entities/education.entity';
import { ExitEntity } from '../modules/exit/entities/exit.entity';
import { ExperienceEntity } from '../modules/experience/entities/experience.entity';
import { FAQEntity } from '../modules/faq/entities/faq.entity';
import { QAndAEntity } from '../modules/faq/entities/question-awser.entity';
import { FileEntity } from '../modules/files/entities/file.entity';
import { FundingInvestorMappingEntity } from '../modules/fundingRound/entities/f-investor-mapping.entity';
import { FundingRoundEntity } from '../modules/fundingRound/entities/fundingRound.entity';
import { IndustryEntity } from '../modules/industry/entities/industry.entity';
import { IpoStockEntity } from '../modules/ipoStock/entities/ipoStock.entity';
import { JobTitleEntity } from '../modules/jobTitle/entities/jobTitle.entity';
import { MergeEntity } from '../modules/merge/entities/merge.entity';
import { ProductEntity } from '../modules/products/entities/product.entity';
import { ProductTypeEntity } from '../modules/productType/entities/product-type.entity';
import { ProfileInvestLocationMappingEntity } from '../modules/profile/entities/p-invest-location-mapping.entity';
import { ProfileNicheIndustryMappingEntity } from '../modules/profile/entities/p-niche-industry-mapping.entity';
import { ProfileSkillMappingEntity } from '../modules/profile/entities/p-skill-mapping.entity';
import { ProfileEntity } from '../modules/profile/entities/profile.entity';
import { RecentNewEntity } from '../modules/recentNews/entities/recentNew.entity';
import { SchoolEntity } from '../modules/school/entities/school.entity';
import { ServiceEntity } from '../modules/services/entities/service.entity';
import { SkillEntity } from '../modules/skill/entities/skill.entity';
import { SocialEntity } from '../modules/socials/entities/social.entity';
import { TransferEntity } from '../modules/transfer/entities/transfer.entity';
import { UserMappingEntity } from '../modules/user-mapping/entity/user-mapping.entity';
import { FundingRoundRecordEntity } from '../modules/user/entities/funding-round-record.entity';
import { IndividualRecordEntity } from '../modules/user/entities/individual-record.entity';
import { OrganizationRecordEntity } from '../modules/user/entities/organization-record.entity';
import { UserEntity } from '../modules/user/entities/user.entity';
import {
  TYPEORM_DATABASE,
  TYPEORM_HOST,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_USERNAME,
} from '../utils/constants';

// const entitiesFolder = TYPEORM_ENTITIES.split(",");
// const migrationsFolder = TYPEORM_MIGRATIONS.split(",");
const entities = [
  CompanyChiefMapping,
  CompanyDirectorMapping,
  CompanyFounderMapping,
  CompanyIndustryMappingEntity,
  CompanyEntity,
  CountryEntity,
  CityEntity,
  EducationEntity,
  ExperienceEntity,
  JobTitleEntity,
  FileEntity,
  IndustryEntity,
  AlbumEntity,
  IpoStockEntity,
  ProfileEntity,
  ProfileEntity,
  ExitEntity,
  TransferEntity,
  SkillEntity,
  UserEntity,
  CompanyPeopleMappingEntity,
  ProfileSkillMappingEntity,
  CityEntity,
  FundingInvestorMappingEntity,
  FundingRoundEntity,
  ServiceEntity,
  ProductEntity,
  ProductTypeEntity,
  MergeEntity,
  AcquisitionEntity,
  CompanyCooperationMappingEntity,
  SocialEntity,
  CompanyIndustryMappingEntity,
  ConnectionEntity,
  CampaignEntity,
  HashtagCampaignEntity,
  HashtagCompanyEntity,
  AreaEntity,
  RecentNewEntity,
  SchoolEntity,
  DocumentsEntity,
  UserMappingEntity,
  ProductTypeEntity,
  FAQEntity,
  QAndAEntity,
  ProfileNicheIndustryMappingEntity,
  ProfileInvestLocationMappingEntity,
  CompanyNicheIndustryMappingEntity,
  CompanyInvestLocationMappingEntity,
  IndividualRecordEntity,
  OrganizationRecordEntity,
  FundingRoundRecordEntity,
];

export const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: TYPEORM_HOST,
  port: +TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: TYPEORM_SYNCHRONIZE,
  logging: false,
  entities: entities,
  // migrations: migrationsFolder,
  migrations: [
    'src/migration/*.js',
    'src/modules/*/migration/*.js',
    'src/modules/*/*/migration/*.js',
  ],
};

export const connection = new DataSource(ormConfig);
