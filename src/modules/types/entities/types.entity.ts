import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { PublisherEntity } from 'src/modules/publishers/entities/publisher.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('types')
export class TypeEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  type: string;

  @OneToMany(() => BannerEntity, (banner) => banner.types)
  banners: BannerEntity[];

  @OneToMany(() => PublisherEntity, (publisher) => publisher.type)
  publishers: PublisherEntity[];
}
