import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { SubjectEntity } from 'src/modules/subjects/entities/subject.entity';
import { VideoEntity } from 'src/modules/videos/entities/video.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('categories')
export class CategoryEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @OneToMany(() => SubjectEntity, (subjects) => subjects.category)
  subjects: SubjectEntity[];

  @OneToMany(() => PostEntity, (posts) => posts.category)
  posts: PostEntity[];

  @OneToMany(() => VideoEntity, (video) => video.category)
  videos: VideoEntity[];

  @ManyToMany(() => BannerEntity, (banners) => banners.categories, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'banners_categories',
    joinColumn: { name: 'category_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'banner_id', referencedColumnName: 'id' },
  })
  banners: BannerEntity[];
}
