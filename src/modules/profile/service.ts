import { EntityManager, ILike } from 'typeorm';

import {
  grpcErrorBadRequest,
  grpcErrorNotFound,
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseAbstractService } from '../../services/baseAbstract.service';
import { ApiErrorCode, ApiErrorEnum } from '../../types/apiErrors';
import { mutateQuery } from '../../utils/mutateQuery';
import { HttpError } from './../../utils/error';
import { ProfileEntity } from './entities/profile.entity';
import { TProfile, TQueryProfile } from './types';
import { profileListRelations, relations } from './utils';

export class ProfileService extends BaseAbstractService<ProfileEntity> {
  constructor() {
    super(ProfileEntity);
  }

  static hasInit = false;

  private readonly entityManager = connection.createEntityManager();

  //Get list profile by condition
  async getList(query?: TQueryProfile, em?: EntityManager | undefined) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    if (conditions?.firstName && conditions?.lastName) {
    } else if (conditions?.firstName) {
      conditions.firstName = ILike(`%${conditions.firstName}%`);
    } else if (conditions?.lastName) {
      conditions.lastName = ILike(`%${conditions.lastName}%`);
    }
    try {
      const data = await this.repository.findAndCount({
        where: { ...conditions },
        relations: { ...profileListRelations },
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

  //Find profile by id
  async getById(id: number): Promise<ProfileEntity> {
    const profile = await this.repository.findOne({
      where: { id },
      relations: {
        ...relations,
      },
    });
    if (!profile) throw new grpcErrorNotFound();
    return profile;
  }

  async getByUserId(id: number): Promise<ProfileEntity> {
    const profile = await this.repository.findOne({
      where: { userId: id },
      relations: {
        ...relations,
      },
    });
    if (!profile) throw new grpcErrorNotFound();
    return profile;
  }

  //Create new profile with user exists
  async create(
    dto: TProfile,
    em?: EntityManager | undefined,
  ): Promise<ProfileEntity> {
    const trx = em ?? this.entityManager;
    try {
      return trx.transaction(async (trx) => {
        const data = await trx.create(ProfileEntity, {
          ...dto,
          albums: dto?.albums,
          skills: dto?.skills,
          educations: dto?.educations,
          experiences: dto?.experiences,
          foundedCompanies: dto?.foundedCompanies,
          directorCompanies: dto?.directorCompanies,
          chiefCompanies: dto?.chiefCompanies,
          socials: dto?.socials,
          niches: dto?.niches,
          investLocations: dto?.investLocations,
        });
        return await trx.save(data);
      });
    } catch (error) {
      throw new HttpError(ApiErrorCode.BAD_REQUEST, ApiErrorEnum.BAD_REQUEST);
    }
  }

  async update(
    id: number,
    dto: TProfile,
    em?: EntityManager | undefined,
  ): Promise<ProfileEntity> {
    const trx = em ?? this.entityManager;
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    try {
      return trx.transaction(async (trx) => {
        return await trx.save(ProfileEntity, { ...dto });
      });
    } catch (error) {
      throw new HttpError(ApiErrorCode.BAD_REQUEST, ApiErrorEnum.BAD_REQUEST);
    }
  }

  async delete(id: number): Promise<any> {
    const data = await this.getById(id);
    if (!data) throw new grpcErrorNotFound();
    return await this.repository.delete(id);
  }

  public async count(query: TQueryProfile) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);
    return this.repository.count({
      where: {
        ...conditions,
      },
    });
  }
  //Update profile by id

  // async manageFollowUser(
  //   usersObj: TUsersId,
  // ): Promise<ManageFollowEntity | undefined> {
  //   //Fetch data profile with user id
  //   // const rootProfile: ProfileEntity = await this.findByUserId(usersObj.rootId);
  //   // const followProfile: ProfileEntity = await this.findByUserId(
  //   //   usersObj.followId
  //   // );

  //   //Check root user & follow user of them follow
  //   const userBiFollow = await this.checkUserBiFollow(usersObj);

  //   if (!_.isEmpty(userBiFollow)) return userBiFollow;

  //   //Save root user & follow user in db
  //   const manageFollow = await this.manageFollowService.createUserFollow(
  //     usersObj.rootId,
  //     usersObj.followId,
  //   );

  //   return manageFollow;
  // }

  // async checkUserBiFollow(
  //   usersObj: TUsersId,
  // ): Promise<ManageFollowEntity | undefined> {
  //   const { rootId, followId } = usersObj;

  //   //Check user perform action connect, has been followed by the opponent
  //   const data = await this.manageFollowService.findOneByUsers(
  //     followId,
  //     rootId,
  //   );
  //   if (_.isEmpty(data)) {
  //     //Perform increment follow and follower
  //     await this.incrementFollowData(rootId, followId);
  //     return undefined;
  //   }
  //   if (data.connectedStatus === ConnectedSttEnum.CONNECTED) {
  //     return data;
  //   }
  //   if (data.connectedStatus === ConnectedSttEnum.WAITING) {
  //     //Perform increment connect, follow and follower
  //     await this.incrementFollowData(
  //       rootId,
  //       followId,
  //       ConnectedSttEnum.CONNECTED,
  //     );
  //     //Change data => connected
  //     // const updateData = await this.manageFollowService.updateConnectStt(
  //       data.id,
  //     );
  //     return updateData;
  //   }
  // }

  // //Increment about connect, follow & follower if true condition
  // async incrementFollowData(
  //   rootId: number,
  //   followId: number,
  //   type?: string,
  // ): Promise<void> {
  //   //Fetch profile root and follow profile
  //   const rootProfile: ProfileEntity = await this.findByUserId(rootId);
  //   const followProfile: ProfileEntity = await this.findByUserId(followId);
  //   //Increment variable
  //   let rootInput: any = { follow: ++rootProfile.follow };
  //   let followInput: any = { follower: ++followProfile.follower };
  //   //Check type
  //   if (type === ConnectedSttEnum.CONNECTED) {
  //     rootInput = { ...rootInput, connect: ++rootProfile.connect };
  //     followInput = { ...followInput, connect: ++followProfile.connect };
  //   }

  //   //Increment number follow of root user in db
  //   await this.updateProfile(rootProfile.id, rootInput);
  //   //Increment number follower of follow user in db
  //   await this.updateProfile(followProfile.id, followInput);
  // }

  // //Check status follow rootUser with client User
  // async checkSttFollow(usersObj: TUsersId): Promise<ESttUserFollow> {
  //   const { rootId, followId } = usersObj;
  //   let data: TManageFollow | undefined = undefined;
  //   //Check data with id is root user and client user
  //   data = await this.manageFollowService.findOneByUsers(rootId, followId);
  //   if (data) {
  //     if (data.connectedStatus === ConnectedSttEnum.WAITING) {
  //       return ESttUserFollow.WAIT_CONFIRM;
  //     }
  //     if (data.connectedStatus === ConnectedSttEnum.CONNECTED) {
  //       return ESttUserFollow.CONNECTED;
  //     }
  //   }

  //   //Check data with id is client user and root user
  //   data = await this.manageFollowService.findOneByUsers(followId, rootId);
  //   if (data) {
  //     if (data.connectedStatus === ConnectedSttEnum.WAITING)
  //       return ESttUserFollow.CONFIRM_FOLLOW;
  //     if (data.connectedStatus === ConnectedSttEnum.CONNECTED)
  //       return ESttUserFollow.CONNECTED;
  //   }

  //   return ESttUserFollow.NOT_CONNECTED;
  // }

  // async cancelFollow(usersObj: TUsersId): Promise<any> {
  //   const { rootId, followId } = usersObj;
  //   let data: TManageFollow | undefined = undefined;
  //   //Check data with id is root user and client user
  //   data = await this.manageFollowService.findOneByUsers(rootId, followId);
  //   //Case root user cancel follow is user followed
  //   if (data) {
  //     //Case both user is connected
  //     if (data.connectedStatus === ConnectedSttEnum.CONNECTED) {
  //       const tempData: TManageFollow = {
  //         ...data,
  //         user_1Id: followId,
  //         user_2Id: rootId,
  //         followStatus: FollowSttEnum.FOLLOW,
  //         connectedStatus: ConnectedSttEnum.WAITING,
  //       };
  //       // [data.user_1Id, data.user_2Id] = [followId, rootId];
  //       // data.followStatus = FollowSttEnum.FOLLOW;
  //       // data.connectedStatus = ConnectedSttEnum.WAITING;
  //       // const updateData = await this.manageFollowService.update(
  //         data.id,
  //         tempData,
  //       );
  //       await this.decreaseFollowData(
  //         rootId,
  //         followId,
  //         ConnectedSttEnum.CONNECTED,
  //       );
  //       return updateData;
  //     }
  //     //Case both user is waiting confirm
  //     if (data.connectedStatus === ConnectedSttEnum.WAITING) {
  //       await this.manageFollowService.delete(data.id);
  //       await this.decreaseFollowData(rootId, followId);
  //       return;
  //     }
  //   }
  //   //Case root user cancel follow is followed by client user
  //   data = await this.manageFollowService.findOneByUsers(followId, rootId);
  //   if (data) {
  //     //Case both user is connected
  //     if (data.connectedStatus === ConnectedSttEnum.CONNECTED) {
  //       const tempData: TManageFollow = {
  //         ...data,
  //         followStatus: FollowSttEnum.FOLLOW,
  //         connectedStatus: ConnectedSttEnum.WAITING,
  //       };
  //       // const updateData = await this.manageFollowService.update(
  //         data.id,
  //         tempData,
  //       );
  //       await this.decreaseFollowData(
  //         rootId,
  //         followId,
  //         ConnectedSttEnum.CONNECTED,
  //       );
  //       return updateData;
  //     }
  //     //Case both user is waiting confirm
  //     if (data.connectedStatus === ConnectedSttEnum.WAITING) {
  //       await this.manageFollowService.delete(data.id);
  //       await this.decreaseFollowData(rootId, followId);
  //       return;
  //     }
  //   }
  // }

  // //Decrease about connect, follow & follower if true condition
  // async decreaseFollowData(
  //   rootId: number,
  //   followId: number,
  //   type?: string,
  // ): Promise<void> {
  //   //Fetch profile root and follow profile
  //   const rootProfile: ProfileEntity = await this.findByUserId(rootId);
  //   const followProfile: ProfileEntity = await this.findByUserId(followId);
  //   //Decrease variable
  //   let rootInput: any = { follow: --rootProfile.follow };
  //   let followInput: any = { follower: --followProfile.follower };

  //   //Check type
  //   if (type === ConnectedSttEnum.CONNECTED) {
  //     rootInput = { ...rootInput, connect: --rootProfile.connect };
  //     followInput = { ...followInput, connect: --followProfile.connect };
  //   }

  //   //Decrease number follow of root user in db
  //   await this.updateProfile(rootProfile.id, rootInput);
  //   //Decrease number follower of follow user in db
  //   await this.updateProfile(followProfile.id, followInput);
  // }
}
