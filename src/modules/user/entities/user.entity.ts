import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { ProfileTypeEnum, RoleEnum } from '../../../common/enums/enums';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ConnectionEntity } from '../../connection/entities/connection.entity';

import { ProfileEntity } from '../../profile/entities/profile.entity';
import { FundingRoundRecordEntity } from './funding-round-record.entity';
import { IndividualRecordEntity } from './individual-record.entity';
import { OrganizationRecordEntity } from './organization-record.entity';

@Entity('users')
export class UserEntity extends BaseAbstractEntity {
  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
  })
  email: string;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    unique: true,
  })
  phone: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: [RoleEnum.ADMIN, RoleEnum.USER],
    nullable: true,
    default: RoleEnum.USER,
  })
  role: string;

  @Column({
    name: 'profile_type',
    type: 'enum',
    enum: [ProfileTypeEnum.IND, ProfileTypeEnum.ORG],
    default: ProfileTypeEnum.IND,
  })
  profileType: string;

  @Column('varchar', { name: 'phone_prefix', nullable: true, length: 25 })
  phonePrefix: string;

  @Column('timestamp', {
    name: 'send_verification_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  sendVerificationAt: Date;

  @Column('varchar', { name: 'sub', nullable: true, unique: true })
  sub: string;

  // @OneToMany(() => PostEntity, (latestNews) => latestNews.user)
  // latestNews: PostEntity[];

  @Column('bigint', { name: 'stat_id', nullable: true })
  statId: number;

  @Column('varchar', { name: 'google_id', nullable: true, length: 100 })
  googleId: number;

  @Column('varchar', {
    name: 'google_family_name',
    nullable: true,
    length: 100,
  })
  googleFamilyName: string;

  @Column('varchar', { name: 'google_given_name', nullable: true, length: 100 })
  googleGivenName: string;

  @Column('varchar', { name: 'google_name', nullable: true, length: 191 })
  googleName: string;

  @Column('varchar', { name: 'google_locale', nullable: true, length: 10 })
  googleLocale: string;

  @Column('varchar', { name: 'google_picture', nullable: true, length: 100 })
  googlePicture: string;

  @Column('varchar', {
    name: 'google_verified_email',
    nullable: true,
    length: 2,
  })
  googleVerifiedEmail: string;

  @Column('varchar', { name: 'thumb', nullable: true, length: 191 })
  thumb: string;

  @Column('varchar', { name: 'background', nullable: true, length: 191 })
  background: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: number;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  profile: ProfileEntity;

  @OneToOne(() => CompanyEntity, (company) => company.user, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  company: CompanyEntity;

  @OneToMany(
    () => ConnectionEntity,
    (followingList) => followingList.following,
    {
      cascade: true,
    },
  )
  followingList: ConnectionEntity[];

  @OneToMany(() => ConnectionEntity, (followerList) => followerList.follower, {
    cascade: true,
  })
  followerList: ConnectionEntity[];

  @OneToMany(() => IndividualRecordEntity, (records) => records.user, {
    cascade: true,
  })
  individualRecords: IndividualRecordEntity[];

  @OneToMany(() => OrganizationRecordEntity, (records) => records.user, {
    cascade: true,
  })
  organizationRecords: OrganizationRecordEntity[];

  @OneToMany(() => FundingRoundRecordEntity, (records) => records.user, {
    cascade: true,
  })
  fundingRoundRecords: FundingRoundRecordEntity[];
}
