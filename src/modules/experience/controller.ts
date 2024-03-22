import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { METHOD } from '../../utils/constants';
import { RouteConfig } from './../../controllers/types';
import { ApiMessageEnum } from './../../types/apiMessages';
import { ApiResponse } from './../../types/index';
import { ExperienceEntity } from './entities/experience.entity';
import { experienceSchema, queryExperienceSchema } from './jois';
import { ExperienceService } from './service';
export class ExperienceController {
  path = PATH.EXPERIENCE;

  private readonly service = new ExperienceService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryExperienceSchema)],
        handler: this.create,
      },
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(experienceSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(experienceSchema)],
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

  async create(req: Request, res: Response<ApiResponse<ExperienceEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<ExperienceEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<ExperienceEntity>>) {
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
 *    Experience:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        orgId:
 *          type: number
 *        startDate:
 *          type: string
 *          format: date
 *        endDate:
 *          type: string
 *          format: date
 *        cityId:
 *          type: number
 *        employmentType:
 *          type: string
 *        jobTitleId:
 *          type: number
 *        description:
 *          type: string
 *        currentWorking:
 *          type: boolean
 *        profileId:
 *          type: number
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: Experience
 *  description: Education APIs
 * /experiences:
 *  post:
 *    summary: create
 *    tags: [Experience]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Experience'
 *    responses:
 *      201:
 *        description: OK.
 * /experiences/{id}:
 *  put:
 *    summary: update
 *    tags: [Experience]
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
 *            $ref: '#/components/schemas/Experience'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [Experience]
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
 *    tags: [Experience]
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
