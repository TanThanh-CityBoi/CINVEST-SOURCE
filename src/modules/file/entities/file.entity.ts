import { BaseAbstractEntity } from 'src/common/entity/baseAbstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('files')
export class FileEntity extends BaseAbstractEntity {
  @Column({ name: 'url', type: 'varchar', nullable: true })
  url: string;

  @Column({ name: 'key', type: 'varchar', nullable: true, unique: true })
  key: string;

  @Column({ name: 'size', type: 'bigint', nullable: true })
  size: number;

  @Column({ name: 'mimetype', type: 'varchar', nullable: true })
  mimetype: string;

  @Column({
    name: 'is_public',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  isPublic: boolean;
}
