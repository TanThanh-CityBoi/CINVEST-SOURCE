import { Request, Response } from 'express';
import multer from 'multer';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { ApiResponse } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { generateFiles } from '../../utils/funtions';
import { FileEntity } from './entities/file.entity';
import { FileService } from './service';
export const multerUpload = multer();
export class FileController {
  path = PATH.FILES;
  private readonly service = new FileService();
  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.POST,
        middlewares: [multerUpload.array('files')],
        handler: this.create,
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

  async create(req: Request, res: Response<ApiResponse<any>>) {
    const filesDto = generateFiles(req);
    const data = await this.service.create(filesDto);

    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
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

  async getById(req: Request, res: Response<ApiResponse<FileEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }
}

/**
 * @swagger
 * tags:
 *  name: Files
 * /files:
 *  post:
 *    summary: Upload a file
 *    description: Create a file.
 *    consumes:
 *      - multipart/form-data
 *    tags: [Files]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            required:
 *              - Key
 *              - files
 *            properties:
 *              Key:
 *                type: string
 *              files:
 *                type: array
 *                data:
 *                  type: string
 *                  format: binary
 *              params:
 *                type: object
 *    responses:
 *      201:
 *        description: Created
 * /files/{id}:
 *  get:
 *    summary: get by id
 *    tags: [Files]
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
 *    tags: [Files]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: OK
 */
