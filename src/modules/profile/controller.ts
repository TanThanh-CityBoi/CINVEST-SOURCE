import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse, TPaginationResult } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/service';
import { ProfileEntity } from './entities/profile.entity';
import {
  profileSchema,
  queryProfileSchema,
  updatePhoneNumberValues,
} from './jois';
import { ProfileService } from './service';

export class ProfileController {
  path = PATH.PROFILE;

  private userService = new UserService();
  private profileService = new ProfileService();

  buildRoutes(): RouteConfig[] {
    return [
      // {
      //   path: "/detail",
      //   method: METHOD.GET,
      //   handler: this.getDetail,
      // },
      // {
      //   path: "/update-phone-number",
      //   method: METHOD.PUT,
      //   handler: this.updatePhoneNumber,
      // },
      // {
      //   path: "/follow/",
      //   method: METHOD.POST,
      //   handler: this.handleFollowUser,
      // },
      // {
      //   path: "/check-status/user",
      //   method: METHOD.GET,
      //   handler: this.checkSttUser,
      // },
      // {
      //   path: "/cancel-follow",
      //   method: METHOD.DELETE,
      //   handler: this.cancelFollowUser,
      // },
      // {
      //   path: "/get-our-latest-news/:slug",
      //   method: METHOD.GET,
      //   handler: this.getOurLatestNews,
      // },
      // {
      //   path: "/people/:id",
      //   method: METHOD.GET,
      //   handler: this.getParamsPeople,
      // },
      {
        path: '/investment-detail/:id',
        method: METHOD.GET,
        handler: this.getAllDetailByProfileId,
      },
      {
        path: '/',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryProfileSchema)],
        handler: this.getList,
      },
      {
        path: '/',
        method: METHOD.POST,
        middlewares: [joiMiddleware(profileSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(profileSchema)],
        handler: this.update,
      },
      {
        path: '/:id',
        method: METHOD.DELETE,
        handler: this.delete,
      },
      {
        path: '/:id',
        method: METHOD.GET,
        handler: this.getById,
      },
    ];
  }

  async getList(
    req: Request,
    res: Response<ApiResponse<TPaginationResult<ProfileEntity>>>,
  ) {
    const data = await this.profileService.getList(req?.query);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<ProfileEntity>>) {
    const data = await this.profileService.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async create(req: Request, res: Response<ApiResponse<ProfileEntity>>) {
    const data = await this.profileService.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<ProfileEntity>>) {
    const data = await this.profileService.update(+req.params.id, req.body);
    return res.send({
      message: ApiMessageEnum.UPDATED_SUCCESS,
      data,
    });
  }

  async delete(req: Request, res: Response<ApiResponse<any>>) {
    const data = await this.profileService.delete(+req.params.id);
    return res.send({
      message: ApiMessageEnum.DELETED_SUCCESS,
      data,
    });
  }

  // async getDetail(
  //   req: Request,
  //   res: Response<ApiResponse<TGetProfileResponse>>
  // ) {
  //   const values = await getDetailValues(req);

  //   const user = await this.userService.findBySlug(values.slug);
  //   if (!user) {
  //     throw new HttpError(404);
  //   }

  //   return res.json({
  //     data: {
  //       email: user.email,
  //       phonePrefix: user.phonePrefix,
  //       phone: user.phone,
  //       gender: user.gender,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //     },
  //   });
  // }

  async updatePhoneNumber(
    req: Request,
    res: Response<ApiResponse<UserEntity>>,
  ) {
    const values = await updatePhoneNumberValues(req);
    const user = await this.userService.updatePhoneNumber(
      req.user?.id || '',
      values,
    );
    return res.send({
      message: ApiMessageEnum.UPDATED_SUCCESS,
      data: user,
    });
  }

  //Update Profile by id

  // //Handle user click connect to client user, enforce change follow
  // async handleFollowUser(req: Request, res: Response<ApiResponse<any>>) {
  //   const values = await getFollowValues(req);
  //   const rootUser = await this.userService.findBySlug(values.rootSlug);
  //   const followUser = await this.userService.findBySlug(values.followSlug);
  //   if (rootUser && rootUser.id && followUser && followUser.id) {
  //     const usersObj = { rootId: rootUser.id, followId: followUser?.id };
  //     const data = await this.profileService.manageFollowUser(usersObj);

  //     if (!data)
  //       return res.send({
  //         message: ApiErrorEnum.USER_CONNECTED,
  //         data: null,
  //       });
  //     return res.send({
  //       message: ApiMessageEnum.FOLLOW_SUCCESS,
  //       data,
  //     });
  //   }
  //   return;
  // }

  // //Check status follow for rootUser and followUser
  // async checkSttUser(req: Request, res: Response<ApiResponse<TSttUserFollow>>) {
  //   const values = await paramsFollowValues(req);
  //   const rootUser = await this.userService.findBySlug(values.rootSlug);
  //   const followUser = await this.userService.findBySlug(values.followSlug);

  //   if (rootUser && rootUser.id && followUser && followUser.id) {
  //     const usersObj = { rootId: rootUser.id, followId: followUser?.id };
  //     const sttFollow = await this.profileService.checkSttFollow(usersObj);

  //     return res.send({
  //       message: ApiMessageEnum.FETCH_SUCCESS,
  //       data: sttFollow,
  //     });
  //   }

  //   return res.send({
  //     message: ApiMessageEnum.FETCH_SUCCESS,
  //     data: ESttUserFollow.NOT_CONNECTED,
  //   });
  // }

  // //Handle root user perform cancel client user
  // async cancelFollowUser(req: Request, res: Response<ApiResponse<any>>) {
  //   const values = await paramsFollowValues(req);
  //   const rootUser = await this.userService.findBySlug(values.rootSlug);
  //   const followUser = await this.userService.findBySlug(values.followSlug);

  //   if (rootUser && rootUser.id && followUser && followUser.id) {
  //     const usersObj = { rootId: rootUser.id, followId: followUser?.id };
  //     await this.profileService.cancelFollow(usersObj);
  //     return res.send({
  //       message: ApiMessageEnum.DELETED_SUCCESS,
  //       data: null,
  //     });
  //   }
  //   return res.send({
  //     message: ApiMessageEnum.DELETED_SUCCESS,
  //     data: null,
  //   });
  // }

  //Get list Our latest news
  // async getOurLatestNews(req: Request, res: Response<ApiResponse<TPost[]>>) {
  //   const userInfo: UserEntity | undefined = await this.userService.findBySlug(
  //     req.params.slug
  //   );
  //   if (!userInfo || !userInfo.firstName) {
  //     return res.send({
  //       message: ApiErrorEnum.NOT_FOUND,
  //       data: null,
  //     });
  //   }
  //   const news = await this.postService.findByTag(userInfo.firstName);

  //   return res.send({
  //     message: ApiMessageEnum.FETCH_SUCCESS,
  //     data: mutatePosts(news),
  //   });
  // }

  // async getParamsPeople(req: Request, res: Response<ApiResponse<any>>) {
  //   const profileId = +req.params.id;
  //   const countEmployee = await this.profilesContactsService.repository.count({
  //     where: { profileId, type: EnumProfilesContacts.JOB_DEPARTMENT },
  //   });
  //   const countContacts = await this.profilesContactsService.repository.count({
  //     where: { profileId },
  //   });
  //   // const countBoardAdvisor = await this.profileBoardAdvisorService.repository.count(
  //   //   {
  //   //     where: { profileId },
  //   //   }
  //   // );

  //   const data = { countEmployee, countContacts };

  //   return res.send({
  //     message: ApiMessageEnum.FETCH_SUCCESS,
  //     data,
  //   });
  // }
  async getAllDetailByProfileId(
    req: Request,
    res: Response<ApiResponse<ProfileEntity>>,
  ) {
    const data = await this.profileService.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }
}
/**
 * @swagger
 * components:
 *  schemas:
 *    InterestedMapping:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        profileId:
 *          type: number
 *        albumId:
 *          type: string
 *    SkillMapping:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        profileId:
 *          type: number
 *        skillId:
 *          type: number
 *    Profile:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        gender:
 *          type: string
 *        type:
 *          type: string
 *        dob:
 *          type: string
 *          format: date
 *        cityId:
 *          type: number
 *        description:
 *          type: string
 *        investDescription:
 *          type: string
 *        userId:
 *          type: number
 *        albums:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Album'
 *        educations:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Education'
 *        experiences:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Experience'
 *        skills:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/SkillMapping'
 *        foundedCompanies:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/CompanyFounderMapping'
 *        directorCompanies:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/CompanyDirectorMapping'
 *        chiefCompanies:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/CompanyChiefMapping'
 * tags:
 *  name: Profile
 *  description: Profile APIs
 * /profiles:
 *  post:
 *    summary: create
 *    tags: [Profile]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Profile'
 *    responses:
 *      201:
 *        description: OK.
 * /profiles/{id}:
 *  put:
 *    summary: update
 *    tags: [Profile]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Profile'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [Profile]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: OK
 *  delete:
 *    summary: delete by id
 *    tags: [Profile]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      201:
 *        description: OK
 */
