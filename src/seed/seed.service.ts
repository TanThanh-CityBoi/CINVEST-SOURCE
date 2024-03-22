import { Injectable, Logger } from '@nestjs/common';
import { AdvertisingSeedService } from './services/advertising-seed.services';
import { CategorySubjectSeedService } from './services/category-subject-seed.services';
import { PublisherSeedService } from './services/publisher-seed.services';

@Injectable()
export class SeedService {
  constructor(
    private readonly advertisingSeedService: AdvertisingSeedService,
    private readonly publisherSeedService: PublisherSeedService,
    private readonly categorySubjectSeedService: CategorySubjectSeedService,
  ) {}

  async seed(): Promise<void> {
    Logger.debug('Start run seed');
    const data = await Promise.allSettled([
      this.advertisingSeedService.seed(),
      this.publisherSeedService.seed(),
      this.categorySubjectSeedService.seed(),
    ]);
    console.log(data);
    Logger.debug('End run seed');
  }
}
