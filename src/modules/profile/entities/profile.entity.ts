import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { GenderEnum, IndMajorEnum } from '../../../common/enums/enums';
import { AlbumEntity } from '../../album/entities/album.entity';
import { CityEntity } from '../../city/entities/city.entity';
import { CompanyChiefMapping } from '../../company/entities/c-chief-mapping.entity';
import { CompanyDirectorMapping } from '../../company/entities/c-director-mapping.entity';
import { CompanyFounderMapping } from '../../company/entities/c-founder-mapping.entity';
import { CompanyPeopleMappingEntity } from '../../company/entities/c-people-mapping.entity';
import { EducationEntity } from '../../education/entities/education.entity';
import { ExitEntity } from '../../exit/entities/exit.entity';
import { ExperienceEntity } from '../../experience/entities/experience.entity';
import { FundingInvestorMappingEntity } from '../../fundingRound/entities/f-investor-mapping.entity';
import { RecentNewEntity } from '../../recentNews/entities/recentNew.entity';
import { SocialEntity } from '../../socials/entities/social.entity';
import { TransferEntity } from '../../transfer/entities/transfer.entity';
import { IndividualRecordEntity } from '../../user/entities/individual-record.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { ProfileInvestLocationMappingEntity } from './p-invest-location-mapping.entity';
import { ProfileNicheIndustryMappingEntity } from './p-niche-industry-mapping.entity';
import { ProfileSkillMappingEntity } from './p-skill-mapping.entity';

// @Index("user_id_UNIQUE", ["userId"], { unique: true })
@Entity('profiles')
export class ProfileEntity extends BaseAbstractEntity {
  @Column('bigint', { name: 'connect', default: 0 })
  connect: number;

  @Column('bigint', { name: 'follow', default: 0 })
  follow: number;

  @Column('bigint', { name: 'follower', default: 0 })
  follower: number;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: [GenderEnum.MALE, GenderEnum.FEMALE],
    nullable: true,
  })
  gender: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: [IndMajorEnum.PERSONAL, IndMajorEnum.INVESTOR, IndMajorEnum.PARTNER],
    nullable: true,
    default: IndMajorEnum.PERSONAL,
  })
  type: string;

  @Column({ name: 'dob', type: 'date', nullable: true })
  dob: Date;

  @Column({ name: 'dob_year', type: 'year', nullable: true })
  dobYear: string;

  @Column({ name: 'city_id', nullable: true })
  cityId: number;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'id_number', type: 'varchar', nullable: true })
  idNumber: string;

  @Column({ name: 'invest_description', type: 'varchar', nullable: true })
  investDescription: string;

  @Column({ name: 'min_range', type: 'double', nullable: true })
  minRange: number;

  @Column({ name: 'max_range', type: 'double', nullable: true })
  maxRange: number;

  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId: number;

  @OneToOne(() => UserEntity, (users) => users.profile, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => AlbumEntity, (albums) => albums.profile, {
    cascade: true,
  })
  albums: AlbumEntity[];

  @OneToMany(() => ProfileSkillMappingEntity, (skills) => skills.profile, {
    cascade: true,
  })
  skills: ProfileSkillMappingEntity[];

  @OneToMany(() => EducationEntity, (education) => education.profile, {
    cascade: true,
  })
  educations: EducationEntity[];

  @OneToMany(() => ExperienceEntity, (experiences) => experiences.profile, {
    cascade: true,
  })
  experiences: ExperienceEntity[];

  // @OneToMany(() => PRelatedHubEntity, (relatedHubs) => relatedHubs.profile)
  // relatedHubs: PRelatedHubEntity[];

  @ManyToOne(() => CityEntity, (city) => city.profiles)
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @OneToMany(
    () => CompanyFounderMapping,
    (foundedCompanies) => foundedCompanies.founder,
    {
      cascade: true,
    },
  )
  foundedCompanies: CompanyFounderMapping[];

  @OneToMany(
    () => CompanyDirectorMapping,
    (directorCompanies) => directorCompanies.director,
    {
      cascade: true,
    },
  )
  directorCompanies: CompanyDirectorMapping[];

  @OneToMany(
    () => CompanyChiefMapping,
    (chiefCompanies) => chiefCompanies.chief,
    {
      cascade: true,
    },
  )
  chiefCompanies: CompanyChiefMapping[];

  @OneToMany(() => TransferEntity, (transfers) => transfers.profile, {
    cascade: true,
  })
  transfers: TransferEntity[];

  @OneToMany(() => ExitEntity, (exits) => exits.profile, {
    cascade: true,
  })
  exits: ExitEntity[];

  @OneToMany(
    () => CompanyPeopleMappingEntity,
    (companies) => companies.profile,
    {
      cascade: true,
    },
  )
  companies: CompanyPeopleMappingEntity[];

  @OneToMany(
    () => FundingInvestorMappingEntity,
    (investedFundingRounds) => investedFundingRounds.individual,
    {
      cascade: true,
    },
  )
  investedFundingRounds: FundingInvestorMappingEntity[];

  @OneToMany(
    () => FundingInvestorMappingEntity,
    (leadFundingRounds) => leadFundingRounds.leadInvestor,
    {
      cascade: true,
    },
  )
  leadFundingRounds: FundingInvestorMappingEntity[];

  @OneToMany(() => SocialEntity, (socials) => socials.profile, {
    cascade: true,
  })
  socials: SocialEntity[];

  @OneToMany(() => RecentNewEntity, (recentNews) => recentNews.profile, {
    cascade: true,
  })
  recentNews: RecentNewEntity[];

  @OneToMany(
    () => ProfileNicheIndustryMappingEntity,
    (niches) => niches.profile,
    {
      cascade: true,
    },
  )
  niches: ProfileNicheIndustryMappingEntity[];

  @OneToMany(
    () => ProfileInvestLocationMappingEntity,
    (locations) => locations.profile,
    {
      cascade: true,
    },
  )
  investLocations: ProfileInvestLocationMappingEntity[];

  @OneToMany(() => IndividualRecordEntity, (records) => records.profile, {
    cascade: true,
  })
  userRecordeds: IndividualRecordEntity[];
}
