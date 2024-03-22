import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { AdvertisingEntity } from 'src/modules/advertisings/entities/advertisings.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { HashtagEntity } from 'src/modules/hashtags/entities/hashtag.entity';
import { PublisherEntity } from 'src/modules/publishers/entities/publisher.entity';
import { SubjectEntity } from 'src/modules/subjects/entities/subject.entity';
import { User } from 'src/proto/types/users/User';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { POST_TYPE_ENUM } from '../enums/post.enums';

@Entity('posts')
export class PostEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'longtext' })
  content: string;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ name: 'source_url', nullable: true })
  sourceUrl: string;

  @Column({ nullable: true })
  source: string;

  @Column({ nullable: true })
  author: string;

  @Column({ name: 'area_id', nullable: true })
  areaId: number;

  @Column({ name: 'area_name', nullable: true })
  areaName: string;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @Column({ name: 'country_name', nullable: true })
  countryName: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'city_name', nullable: true })
  cityName: string;

  @Column({ name: 'advertising_time', nullable: true })
  advertisingTime: number;

  @Column({ name: 'start_advertising_time', nullable: true })
  startDateAdvertising: Date;

  @Column({ nullable: true, default: 0 })
  view: number;

  @Column({ nullable: true })
  type: POST_TYPE_ENUM;

  @Column({ nullable: true })
  url: string;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @Column({ name: 'subject_id', nullable: true })
  subjectId: number;

  @ManyToOne(() => SubjectEntity, (subject) => subject.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;

  @ManyToMany(() => HashtagEntity, (hashtag) => hashtag.posts, {
    onDelete: 'CASCADE',
  })
  hashtags: HashtagEntity[];

  @Column({ name: 'publisher_id', nullable: true })
  publisherId: number;

  @ManyToOne(() => PublisherEntity, (publisher) => publisher.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'publisher_id' })
  publisher: PublisherEntity;

  @Column({ name: 'advertising_id', nullable: true })
  advertisingId: number;

  @ManyToOne(() => AdvertisingEntity, (advertisings) => advertisings.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'advertising_id' })
  advertisings: AdvertisingEntity;

  @Column({ name: 'publish_at', nullable: true })
  publishAt: Date;

  creator: User;
}
