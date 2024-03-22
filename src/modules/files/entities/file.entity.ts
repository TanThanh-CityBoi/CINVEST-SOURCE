import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { AcquisitionEntity } from '../../acquisitions/entities/acquisition.entity';
import { AlbumEntity } from '../../album/entities/album.entity';
import { EducationEntity } from '../../education/entities/education.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';
import { FundingRoundEntity } from '../../fundingRound/entities/fundingRound.entity';
import { MergeEntity } from '../../merge/entities/merge.entity';
import { ProductEntity } from '../../products/entities/product.entity';
import { ServiceEntity } from '../../services/entities/service.entity';

@Entity('files')
export class FileEntity extends BaseAbstractEntity {
  @Column('varchar', { name: 'url', nullable: true, length: 191 })
  url: string;

  @Column({ name: 'key', type: 'varchar', nullable: true })
  key: string;

  @Column({
    name: 'funding_round_id',

    nullable: true,
  })
  fundingRoundId?: number;

  @Column({
    name: 'user_exp_id',

    nullable: true,
  })
  userExpId: number;

  @Column({
    name: 'education_id',

    nullable: true,
  })
  educationId: number;

  @Column({
    name: 'album_id',
    nullable: true,
  })
  albumId: number;

  @Column({
    name: 'service_id',
    nullable: true,
  })
  serviceId: number;

  @Column({
    name: 'product_id',
    nullable: true,
  })
  productId: number;

  @Column({
    name: 'acquisition_id',
    nullable: true,
  })
  acquisitionId: number;

  @ManyToOne(
    () => FundingRoundEntity,
    (fundingRound) => fundingRound.documents,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'funding_round_id' })
  fundingRound: FundingRoundEntity;

  @ManyToOne(() => ExperienceEntity, (userExp) => userExp.documents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_exp_id' })
  userExp: ExperienceEntity;

  @ManyToOne(() => EducationEntity, (education) => education.documents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'education_id' })
  education: EducationEntity;

  @ManyToOne(() => AlbumEntity, (album) => album.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'album_id' })
  album: AlbumEntity;

  @ManyToOne(() => ServiceEntity, (service) => service.files, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;

  @ManyToOne(() => ProductEntity, (product) => product.documents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => AcquisitionEntity, (acquisition) => acquisition.documents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'acquisition_id' })
  acquisition: AcquisitionEntity;

  @ManyToOne(() => MergeEntity, (merger) => merger.document, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'merger_id' })
  merger: MergeEntity;
}
