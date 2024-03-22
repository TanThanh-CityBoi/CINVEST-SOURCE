import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { VideoEntity } from 'src/modules/videos/entities/video.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('advertisings')
export class AdvertisingEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  type: string;

  @OneToMany(() => PostEntity, (posts) => posts.advertisings)
  posts: PostEntity[];

  @OneToMany(() => BannerEntity, (banner) => banner.advertisings)
  banners: PostEntity[];

  @OneToMany(() => VideoEntity, (video) => video.advertisings)
  videos: VideoEntity[];
}
