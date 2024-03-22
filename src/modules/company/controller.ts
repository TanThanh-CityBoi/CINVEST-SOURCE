import { Request, Response } from 'express';

import { PATH } from '../../common/enums/enums';
import { RouteConfig } from '../../controllers/types';
import { joiMiddleware } from '../../middleware/joi.middleware';
import { ApiResponse, TPaginationResult } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { CompanyEntity } from './entities/company.entity';
import { companySchema, queryCompanySchema } from './jois';
import { CompanyService } from './service';

export class CompanyController {
  path = PATH.COMPANY;

  private readonly service = new CompanyService();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '',
        method: METHOD.GET,
        middlewares: [joiMiddleware(queryCompanySchema)],
        handler: this.getList,
      },
      {
        path: '',
        method: METHOD.POST,
        middlewares: [joiMiddleware(companySchema)],
        handler: this.create,
      },
      {
        path: '/:id',
        method: METHOD.PUT,
        middlewares: [joiMiddleware(companySchema)],
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
    res: Response<ApiResponse<TPaginationResult<CompanyEntity>>>,
  ) {
    const data = await this.service.getList(req.query);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async create(req: Request, res: Response<ApiResponse<CompanyEntity>>) {
    const data = await this.service.create(req.body);
    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data,
    });
  }

  async getById(req: Request, res: Response<ApiResponse<CompanyEntity>>) {
    const data = await this.service.getById(+req.params.id);
    return res.send({
      message: ApiMessageEnum.FETCH_SUCCESS,
      data,
    });
  }

  async update(req: Request, res: Response<ApiResponse<CompanyEntity>>) {
    const data = await this.service.update(+req.params.id, req.body);
    return res.send({
      message: ApiMessageEnum.UPDATED_SUCCESS,
      data,
    });
  }

  async delete(req: Request, res: Response<ApiResponse<CompanyEntity>>) {
    const data = await this.service.delete(+req.params.id);
    return res.send({
      message: ApiMessageEnum.DELETED_SUCCESS,
      data: null,
    });
  }
}
