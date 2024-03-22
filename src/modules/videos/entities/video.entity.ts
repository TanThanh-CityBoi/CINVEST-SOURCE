import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { AdvertisingEntity } from 'src/modules/advertisings/entities/advertisings.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { HashtagEntity } from 'src/modules/hashtags/entities/hashtag.entity';
import { User } from 'src/proto/types/users/User';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity('videos')
export class VideoEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  title: string;

  @Column({ name: 'youtube_id', nullable: true })
  youtubeId: string;

  @Column({ name: 'descriptions', nullable: true })
  descriptions: string;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @Column({ name: 'country_name', nullable: true })
  countryName: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'city_name', nullable: true })
  cityName: string;

  @Column({ name: 'advertising_id', nullable: true })
  advertisingId: number;

  @Column({ name: 'advertising_time', nullable: true })
  advertisingTime: number;

  @Column({ name: 'start_date_advertising', nullable: true })
  startDateAdvertising: Date;

  @ManyToOne(() => AdvertisingEntity, (advertisings) => advertisings.videos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'advertising_id' })
  advertisings: AdvertisingEntity;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.videos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToMany(() => HashtagEntity, (hashtag) => hashtag.videos, {
    onDelete: 'CASCADE',
  })
  hashtags: HashtagEntity[];

  @Column({ name: 'publish_at', nullable: true })
  publishAt: Date;

  creator: User;
}
