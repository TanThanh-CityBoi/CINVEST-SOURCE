import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse } from '../../types';
import { METHOD } from '../../utils/constants';
import { ApiMessageEnum } from './../../types/apiMessages';
import { EducationEntity } from './entities/education.entity';
import { educationSchema, queryEducationSchema } from './jois';
import { EducationService } from './service';

export class EducationController {
  path = PATH.EDUCATION;

  private readonly service = new EducationService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryEducationSchema)],
        handler: this.create,
      },
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(educationSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(educationSchema)],
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

  async create(req: Request, res: Response<ApiResponse<EducationEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<EducationEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<EducationEntity>>) {
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
 *    Education:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        school:
 *          type: string
 *        startDate:
 *          type: string
 *          format: date
 *        endDate:
 *          type: string
 *          format: date
 *        degreeType:
 *          type: string
 *          enum:
 *            - Bachelor
 *            - Diploma
 *            - Other
 *        major:
 *          type: string
 *        gpa:
 *          type: number
 *        description:
 *          type: string
 *        profileId:
 *          type: number
 *        cityId:
 *          type: number
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: Education
 *  description: Education APIs
 * /educations:
 *  post:
 *    summary: create
 *    tags: [Education]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Education'
 *    responses:
 *      201:
 *        description: OK.
 * /educations/{id}:
 *  put:
 *    summary: update
 *    tags: [Education]
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
 *            $ref: '#/components/schemas/Education'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [Education]
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
 *    tags: [Education]
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
