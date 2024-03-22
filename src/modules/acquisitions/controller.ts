import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse, TPaginationResult } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { AcquisitionEntity } from './entities/acquisition.entity';
import { acquisitionSchema, queryAcquisitionSchema } from './jois';
import { AcquisitionService } from './service';

export class AcquisitionController {
  path = PATH.ACQUISITION;

  private readonly service = new AcquisitionService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryAcquisitionSchema)],
        handler: this.getList,
      },
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(acquisitionSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(acquisitionSchema)],
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
    res: Response<ApiResponse<TPaginationResult<AcquisitionEntity>>>,
  ) {
    const data = await this.service.getList(req.query);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async create(req: Request, res: Response<ApiResponse<AcquisitionEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<AcquisitionEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<AcquisitionEntity>>) {
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
 *    Acquisition:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        acquirerId:
 *          type: number
 *        acquireeId:
 *          type: number
 *        description:
 *          type: string
 *        value:
 *          type: number
 *        equity:
 *          type: number
 *        announcedDate:
 *          type: string
 *          format: Date;
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: Acquisition
 *  description: Acquisition APIs
 * /acquisitions:
 *  get:
 *    summary: get list
 *    tags: [Acquisition]
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
 *    tags: [Acquisition]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Acquisition'
 *    responses:
 *      201:
 *        description: OK.
 * /acquisitions/{id}:
 *  put:
 *    summary: update
 *    tags: [Acquisition]
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
 *            $ref: '#/components/schemas/Acquisition'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [Acquisition]
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
 *    tags: [Acquisition]
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
