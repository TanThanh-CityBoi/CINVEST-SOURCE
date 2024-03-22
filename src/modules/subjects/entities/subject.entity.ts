import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { BannerEntity } from 'src/modules/banners/entities/banners.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('subjects')
export class SubjectEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (categories) => categories.subjects, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(() => PostEntity, (posts) => posts.subject)
  posts: PostEntity[];

  @ManyToMany(() => BannerEntity, (banners) => banners.subjects, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'banners_subjects',
    joinColumn: { name: 'subject_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'banner_id', referencedColumnName: 'id' },
  })
  banners: BannerEntity[];
}
