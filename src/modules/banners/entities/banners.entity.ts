import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { ActionTypeEntity } from 'src/modules/action-types/entities/action-types.entity';
import { AdvertisingEntity } from 'src/modules/advertisings/entities/advertisings.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { SubjectEntity } from 'src/modules/subjects/entities/subject.entity';
import { TypeEntity } from 'src/modules/types/entities/types.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { BANNER_TYPE_SERVICES_ENUM } from '../enums/banners.enums';

@Entity('banners')
export class BannerEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  type: string;

  @Column({ name: 'type_id', nullable: true })
  typeId: number;

  @Column({ name: 'action_type', nullable: true })
  actionType: string;

  @Column({ name: 'action_type_id', nullable: true })
  actionTypeId: number;

  @Column({ name: 'redirect_url', nullable: true })
  redirectUrl: string;

  @Column({ name: 'start_date', nullable: true })
  startDate: Date;

  @Column({ name: 'end_date', nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  attachment: string;

  @Column({ name: 'advertising_id', nullable: true })
  advertisingId: number;

  @Column({ name: 'advertising_days', nullable: true })
  advertisingDays: number;

  @Column({ name: 'start_date_advertising', nullable: true })
  startDateAdvertising: Date;

  @Column({ name: 'country_id', nullable: true })
  countryId: number;

  @Column({ name: 'country_name', nullable: true })
  countryName: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'city_name', nullable: true })
  cityName: string;

  @ManyToOne(() => AdvertisingEntity, (advertisings) => advertisings.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'advertising_id' })
  advertisings: AdvertisingEntity;

  @ManyToMany(() => CategoryEntity, (categories) => categories.banners, {
    onDelete: 'CASCADE',
  })
  categories: CategoryEntity[];

  @ManyToMany(() => SubjectEntity, (subjects) => subjects.banners, {
    onDelete: 'CASCADE',
  })
  subjects: SubjectEntity[];

  @ManyToOne(() => TypeEntity, (type) => type.banners, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'type_id' })
  types: TypeEntity;

  @ManyToOne(() => ActionTypeEntity, (actionType) => actionType.banners, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'action_type_id' })
  actionTypes: ActionTypeEntity;

  @Column({ name: 'publish_at', nullable: true })
  publishAt: Date;

  @Column({
    name: 'type_services',
    nullable: true,
    default: BANNER_TYPE_SERVICES_ENUM.NEWS,
  })
  typeServices: BANNER_TYPE_SERVICES_ENUM;
}
