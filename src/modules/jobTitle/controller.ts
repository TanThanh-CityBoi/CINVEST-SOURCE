import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse, TPaginationResult } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { countrySchema } from '../country/jois';
import { JobTitleEntity } from './entities/jobTitle.entity';
import { queryJobTitleSchema } from './jois';
import { JobTitleService } from './service';
export class JobTitleController {
  path = PATH.JOBTITLE;

  private readonly service = new JobTitleService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryJobTitleSchema)],
        handler: this.getList,
      },
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(countrySchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(countrySchema)],
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
    res: Response<ApiResponse<TPaginationResult<JobTitleEntity>>>,
  ) {
    const data = await this.service.getList(req.query);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async create(req: Request, res: Response<ApiResponse<JobTitleEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<JobTitleEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<JobTitleEntity>>) {
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
 *    JobTitle:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: JobTitle
 *  description: JobTitle APIs
 * /job-titles:
 *  get:
 *    summary: get list
 *    tags: [JobTitle]
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
 *    tags: [JobTitle]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/JobTitle'
 *    responses:
 *      201:
 *        description: OK.
 * /job-titles/{id}:
 *  put:
 *    summary: update
 *    tags: [JobTitle]
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
 *            $ref: '#/components/schemas/JobTitle'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [JobTitle]
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
 *    tags: [JobTitle]
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
