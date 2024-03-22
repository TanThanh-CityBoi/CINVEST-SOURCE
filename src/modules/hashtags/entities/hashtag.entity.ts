import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { PostEntity } from 'src/modules/posts/entities/post.entity';
import { VideoEntity } from 'src/modules/videos/entities/video.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('hashtags')
export class HashtagEntity extends BaseAbstractEntity {
  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => PostEntity, (post) => post.hashtags, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'hashtags_posts' })
  posts: PostEntity[];

  @ManyToMany(() => VideoEntity, (videos) => videos.hashtags, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'hashtags_videos' })
  videos: VideoEntity[];
}
