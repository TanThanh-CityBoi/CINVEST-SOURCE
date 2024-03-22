import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse, TPaginationResult } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { UserEntity } from './entities/user.entity';
import { queryUserSchema, userSchema } from './jois';
import { UserService } from './service';

export class UserController {
  path = PATH.USERS;

  private readonly service = new UserService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '/',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryUserSchema)],
        handler: this.getList,
      },
      {
        path: '/',
        method: METHOD.POST,
        middlewares: [joiMiddleware(userSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(userSchema)],
        handler: this.update,
      },
      {
        path: '/:id',
        method: METHOD.GET,
        handler: this.getById,
      },
      {
        path: '/:id',
        method: METHOD.DELETE,
        handler: this.delete,
      },
    ];
  }

  async getList(
    req: Request,
    res: Response<ApiResponse<TPaginationResult<UserEntity> | UserEntity[]>>,
  ) {
    const data = await this.service.getList(req?.query);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<UserEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async create(req: Request, res: Response<ApiResponse<UserEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<UserEntity>>) {
    const data = await this.service.update(+req.params.id, req.body);
    return res.send({
      message: ApiMessageEnum.UPDATED_SUCCESS,
      data,
    });
  }

  async delete(req: Request, res: Response<ApiResponse<any>>) {
    const data = await this.service.delete(+req.params.id);
    return res.send({
      message: ApiMessageEnum.DELETED_SUCCESS,
      data,
    });
  }
}

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        phone:
 *          type: string
 *        phonePrefix:
 *          type: string
 *        profileType:
 *          type: string
 *        role:
 *          type: string
 *          enum:
 *            - ADMIN
 *            - USER
 *        profile:
 *            $ref: '#/components/schemas/Profile'
 *        company:
 *            $ref: '#/components/schemas/Company'
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: User
 *  description: User APIs
 * /users:
 *  get:
 *    summary: get
 *    tags: [User]
 *    parameters:
 *      - in: query
 *        name: page
 *        required: false
 *        schema:
 *          type: number
 *          default: 1
 *        allowReserved: true
 *      - in: query
 *        name: limit
 *        required: false
 *        schema:
 *          type: number
 *          default: 10
 *        allowReserverd: true
 *      - in: query
 *        name: sortBy
 *        required: false
 *        schema:
 *          type: string
 *          default: 'createdAt'
 *        allowReserverd: true
 *      - in: query
 *        name: sortOrder
 *        required: false
 *        schema:
 *          type: string
 *          enum: ['ASC', 'DESC']
 *          default: 'ASC'
 *        allowReserverd: true
 *      - in: query
 *        name: name
 *        required: false
 *        schema:
 *          type: string
 *        allowReserverd: true
 *    responses:
 *      200:
 *        description: OK
 *  post:
 *    summary: create
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: OK.
 * /users/{id}:
 *  put:
 *    summary: update
 *    tags: [User]
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
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      201:
 *        description: OK
 *  delete:
 *    summary: delete by id
 *    tags: [User]
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
