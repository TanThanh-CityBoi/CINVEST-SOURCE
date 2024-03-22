import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('action_types')
export class ActionTypeEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @OneToMany(() => BannerEntity, (banner) => banner.actionTypes)
  banners: BannerEntity[];
}
