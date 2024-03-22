import { map } from 'lodash';
import { EntityManager, Equal, In, Not } from 'typeorm';

import { ProfileTypeEnum, StateEnum } from '../../common/enums/enums';
import {
  grpcErrorBadRequest,
  grpcErrorNotFound,
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { ApiErrorEnum } from '../../types/apiErrors';
import { ErrorNotFound, HttpError } from '../../utils/error';
import { mutateQuery } from '../../utils/mutateQuery';
import { AlbumEntity } from '../album/entities/album.entity';
import { CompanyChiefMapping } from '../company/entities/c-chief-mapping.entity';
import { CompanyDirectorMapping } from '../company/entities/c-director-mapping.entity';
import { CompanyFounderMapping } from '../company/entities/c-founder-mapping.entity';
import { CompanyPeopleMappingEntity } from '../company/entities/c-people-mapping.entity';
import { CompanyEntity } from '../company/entities/company.entity';
import { CompanyService } from '../company/service';
import { ConnectionEntity } from '../connection/entities/connection.entity';
import { EducationEntity } from '../education/entities/education.entity';
import { ExitEntity } from '../exit/entities/exit.entity';
import { ExperienceEntity } from '../experience/entities/experience.entity';
import { ProfileSkillMappingEntity } from '../profile/entities/p-skill-mapping.entity';
import { ProfileEntity } from '../profile/entities/profile.entity';
import { ProfileService } from '../profile/service';
import { RecentNewEntity } from '../recentNews/entities/recentNew.entity';
import { SkillEntity } from '../skill/entities/skill.entity';
import { SocialEntity } from '../socials/entities/social.entity';
import { UserEntity } from './entities/user.entity';
import { TCreateUser, TQueryUser, TUser } from './types';

export class UserService extends BaseAbstractService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  private readonly entityManager = connection.createEntityManager();
  static validStatuses: string[] = [StateEnum.APPROVED];
  private readonly profileService = new ProfileService();
  private readonly companyService = new CompanyService();

  async getList(query: TQueryUser) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);

    if (conditions?.subs?.length > 0) {
      conditions.sub = In(conditions.subs);
      delete conditions.subs;
    }
    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        relations: {
          profile: true,
          company: true,
          followingList: true,
          followerList: true,
        },
        skip,
        take: limit,
        order: {
          [sortBy]: sortOrder,
        },
      });
      return {
        data: data[0],
        totalItems: data[1],
        perPage: limit,
        page: query?.page,
        totalPages: Math.ceil(data[1] / limit),
      };
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }

  async getById(id: number): Promise<UserEntity> {
    const data = await this.repository.findOne({
      where: { id },
      relations: {
        followingList: true,
        followerList: true,
        individualRecords: true,
        fundingRoundRecords: true,
        organizationRecords: true,
      },
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async getBySub(sub: string): Promise<UserEntity> {
    const data = await this.repository.findOne({
      where: { sub },
      relations: {
        followingList: true,
        followerList: true,
        individualRecords: true,
        fundingRoundRecords: true,
        organizationRecords: true,
      },
    });
    if (!data) throw new grpcErrorNotFound();
    if (data.profileType === ProfileTypeEnum.IND) {
      data.profile = await this.profileService.getByUserId(data.id);
    } else {
      data.company = await this.companyService.getByUserId(data.id);
    }
    return data;
  }

  async create(dto: TCreateUser, em?: EntityManager): Promise<UserEntity> {
    const trx = em ?? this.entityManager;
    try {
      await this.validateUnique(dto.email, dto.phone, dto.phonePrefix);

      return trx.transaction(async (trx) => {
        if (!dto?.profile) delete dto?.profile;
        if (!dto?.company) delete dto?.company;
        const data = await trx.save(
          trx.create(
            UserEntity,
            dto?.profileType === ProfileTypeEnum.ORG
              ? {
                  ...dto,
                  profileType: dto.profileType,
                  company: {
                    ...dto?.company,
                  },
                }
              : {
                  ...dto,
                  profileType: dto.profileType,
                  profile: {
                    ...dto?.profile,
                  },
                },
          ),
        );
        data[
          dto?.profileType === ProfileTypeEnum.ORG ? 'companyId' : 'profileId'
        ] =
          dto?.profileType === ProfileTypeEnum.ORG
            ? data.company.id
            : data.profile.id;

        return trx.save(UserEntity, data);
      });
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async update(
    id: number,
    dto: TUser | UserEntity,
    em?: EntityManager | undefined,
  ): Promise<UserEntity> {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    // const updateData: UserEntity = Object.assign(data, dto);
    try {
      return trx.transaction((trx) => trx.save(UserEntity, { ...dto }));
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async delete(id: number) {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    return await this.repository.delete(data.id);
  }

  async deleteBySub(sub: string) {
    const user = await this.repository.findOneBy({ sub });
    if (!user) throw new grpcErrorNotFound();

    const trx = this.entityManager;
    try {
      return trx.transaction((trx) => trx.delete(UserEntity, { id: user.id }));
    } catch (error) {
      throw new grpcErrorBadRequest(JSON.stringify(error));
    }
  }

  async updatePhoneNumber(
    id: UserEntity['id'],
    input: { phonePrefix: string; phone: string },
  ): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
    });
    if (!user) throw new ErrorNotFound();
    await this.validateUniquePhone(input.phone, [user.id]);
    user.phonePrefix = input.phonePrefix;
    user.phone = input.phone;
    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    if (!user) throw new ErrorNotFound();
    return user;
  }

  async findBySub(sub: string): Promise<UserEntity | undefined> {
    const data = await this.repository.findOne({
      where: { sub },
    });
    if (!data) throw new grpcErrorNotFound();
    return data;
  }

  async validateUnique(email: string, phone: string, phonePrefix?: string) {
    const user = await this.repository.findOne({
      where: [
        {
          email,
        },
        {
          phone,
          phonePrefix,
        },
      ],
    });
    if (user) {
      throw new grpcErrorBadRequest(ApiErrorEnum.PHONE_EMAIL_ALREADY_EXIST);
    }
  }

  async validateUniquePhone(phone: string, excepts: UserEntity['id'][]) {
    const user = await this.repository.findOne({
      where: {
        phone: Equal(phone),
        id: Not(In(excepts)),
      },
    });
    if (user) {
      throw new HttpError(422, ApiErrorEnum.PHONE_EMAIL_ALREADY_EXIST);
    }
  }

  async verifyEmail(email: string, token: string) {
    // find user
    const data = await this.repository.findOne({
      where: {
        email: email,
      },
    });
    if (!data) throw new grpcErrorNotFound();
  }
}
