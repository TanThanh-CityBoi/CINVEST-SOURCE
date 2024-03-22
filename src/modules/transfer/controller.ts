import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { TransferEntity } from './entities/transfer.entity';
import { transferSchema } from './jois';
import { TransferService } from './service';

export class PTransferController {
  path = PATH.TRANSFER;

  private readonly service = new TransferService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(transferSchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(transferSchema)],
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

  async create(req: Request, res: Response<ApiResponse<TransferEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<TransferEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<TransferEntity>>) {
    const data = await this.service.update(+req.params.id, req.body);
    return res.send({
      message: ApiMessageEnum.UPDATED_SUCCESS,
      data,
    });
  }

  async delete(req: Request, res: Response<ApiResponse<TransferEntity>>) {
    const data = await this.service.delete(+req.params.id);
    return res.send({
      message: ApiMessageEnum.DELETED_SUCCESS,
      data: null,
    });
  }
}
/**
 * @swagger
 * components:
 *  schemas:
 *    Transfer:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        amount:
 *          type: number
 *        totalValue:
 *          type: number
 *        transferDate:
 *          type: string
 *          format: date
 *        transfereeId:
 *          type: string
 *        profileId:
 *          type: number
 *        state:
 *          type: string
 *          enum:
 *            - PENDING
 *            - APPROVED
 *            - CANCELLED
 * tags:
 *  name: Transfer
 *  description: Transfer APIs
 * /transfers:
 *  post:
 *    summary: create
 *    tags: [Transfer]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Transfer'
 *    responses:
 *      201:
 *        description: OK.
 * /transfers/{id}:
 *  put:
 *    summary: update
 *    tags: [Transfer]
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
 *            $ref: '#/components/schemas/Transfer'
 *    responses:
 *      201:
 *        description: OK
 *  get:
 *    summary: get by id
 *    tags: [Transfer]
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
 *    tags: [Transfer]
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
