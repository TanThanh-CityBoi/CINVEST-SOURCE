import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { TypeEntity } from 'src/modules/types/entities/types.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PUBLISHER_POST_TYPE_ENUM } from '../enums/publisher.enum';

@Entity('publishers')
export class PublisherEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ name: 'type_id', nullable: true })
  typeId: number;

  @Column({ nullable: true })
  url: string;

  @Column({ name: 'post_type', nullable: true })
  postType: PUBLISHER_POST_TYPE_ENUM;

  @Column({ nullable: true, type: 'longtext' })
  description: string;

  @Column({ nullable: true })
  thumbnail: string;

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

  @OneToMany(() => PostEntity, (posts) => posts.publisher)
  posts: PostEntity[];

  @ManyToOne(() => TypeEntity, (type) => type.publishers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'type_id' })
  type: TypeEntity;
}
