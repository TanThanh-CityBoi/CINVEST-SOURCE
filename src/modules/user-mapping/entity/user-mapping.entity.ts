import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { CampaignEntity } from '../../campaign/entities/campaign.entity';

@Entity('user-mapping')
export class UserMappingEntity extends BaseAbstractEntity {
  @Column('varchar', { name: 'sub', nullable: true, unique: true })
  sub: string;

  @ManyToMany(() => CampaignEntity, (campaigns) => campaigns.bookmarks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({ name: 'bookmarks_campaigns' })
  campaigns: CampaignEntity[];
}
