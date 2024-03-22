import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisingEntity } from 'src/modules/advertisings/entities/advertisings.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';
import { DatabasesModule } from 'src/modules/databases/databases.module';
import { PublisherEntity } from 'src/modules/publishers/entities/publisher.entity';
import { SubjectEntity } from 'src/modules/subjects/entities/subject.entity';
import { SeedService } from './seed.service';
import { AdvertisingSeedService } from './services/advertising-seed.services';
import { CategorySubjectSeedService } from './services/category-subject-seed.services';
import { PublisherSeedService } from './services/publisher-seed.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdvertisingEntity,
      PublisherEntity,
      CategoryEntity,
      SubjectEntity,
    ]),
    ConfigurationModule,
    DatabasesModule,
  ],
  providers: [
    SeedService,
    AdvertisingSeedService,
    PublisherSeedService,
    CategorySubjectSeedService,
  ],
})
export class SeedModule {}
