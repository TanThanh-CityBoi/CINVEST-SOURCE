import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

@Entity('albums')
export class AlbumEntity extends BaseAbstractEntity {
  @Column({ name: 'name', nullable: true, type: 'varchar' })
  name: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @OneToMany(() => FileEntity, (images) => images.album, { cascade: true })
  images: FileEntity[];

  @ManyToOne(() => ProfileEntity, (profile) => profile.albums, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.albums, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;
}
