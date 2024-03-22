import { Module } from '@nestjs/common';

import { StoreBannersModule } from './banners/store-banners.module';

@Module({
  imports: [StoreBannersModule],
})
export class StoresModule {}
