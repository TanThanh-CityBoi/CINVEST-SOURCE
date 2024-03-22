import { Module } from '@nestjs/common';

import { AcquisitionModule } from './acquisitions/module';
import { AlbumModule } from './album/module';
import { ArchiveRecordsModule } from './archive-records/archive-records.module';
import { AreaModule } from './area/module';
import { CampaignModule } from './campaign/module';
import { CityModule } from './city/module';
import { CompanyModule } from './company/module';
import { ConnectionModule } from './connections/module';
import { CountryModule } from './country/module';
import { EducationModule } from './education/module';
import { ExperienceModule } from './experience/module';
import { FundingRoundModule } from './fundingRound/module';
import { IndustryModule } from './industry/module';
import { IpoStockModule } from './ipoStock/module';
import { JobTitleModule } from './jobTitle/module';
import { MergeModule } from './merge/module';
import { ProductModule } from './products/module';
import { ProductTypeModule } from './productType/module';
import { ProfileModule } from './profile/module';
import { RecentNewModule } from './recentNew/module';
import { SchoolModule } from './school/module';
import { ServiceModule } from './service/module';
import { SkillModule } from './skills/module';
import { SocialModule } from './social/module';
import { StatisticModule } from './statistics/module';
import { UserModule } from './user/module';

@Module({
  imports: [
    SkillModule,
    CountryModule,
    CityModule,
    AcquisitionModule,
    AlbumModule,
    CompanyModule,
    EducationModule,
    ExperienceModule,
    FundingRoundModule,
    IndustryModule,
    IpoStockModule,
    JobTitleModule,
    MergeModule,
    ProductModule,
    ProfileModule,
    ServiceModule,
    SkillModule,
    UserModule,
    SocialModule,
    ConnectionModule,
    RecentNewModule,
    AreaModule,
    SchoolModule,
    CampaignModule,
    StatisticModule,
    ProductTypeModule,
    ArchiveRecordsModule,
  ],
})
export class ProfilesModule {}
