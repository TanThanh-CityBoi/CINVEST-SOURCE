import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEnum } from 'src/common/enums/state.enums';
import { AdvertisingEntity } from 'src/modules/advertisings/entities/advertisings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertisingSeedService {
  constructor(
    @InjectRepository(AdvertisingEntity)
    private readonly advertisingRepo: Repository<AdvertisingEntity>,
  ) {}

  private readonly datadvertising = [
    {
      name: 'Top',
      state: StateEnum.APPROVED,
    },
    {
      name: 'Pinned homepage',
      state: StateEnum.APPROVED,
    },
    {
      name: 'Pinned category',
      state: StateEnum.APPROVED,
    },
    {
      name: 'Feaured',
      state: StateEnum.APPROVED,
    },
  ];

  async seed() {
    Logger.debug('AdvertisingSeedService');
    return Promise.all(
      this.datadvertising.map(async (advertisiing) => {
        const detail = await this.advertisingRepo.findOne({
          where: {
            name: advertisiing.name,
          },
        });
        if (detail) return;
        return this.advertisingRepo.save(advertisiing);
      }),
    );
  }
}
