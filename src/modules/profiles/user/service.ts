import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Response } from 'express';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { CognitoService } from 'src/modules/cognito/service';
import { UserServiceClient } from 'src/proto/types/users/UserService';
import { mutateQuery } from 'src/utils/mutateQuery';

import { QueryUserDto } from './dto/query.dto';
import { UpdateUserDto } from './dto/update.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private service: UserServiceClient;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
    private readonly cognitoService: CognitoService,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<UserServiceClient>(ServicesEnum.USER);
  }

  async getById(id: string, response: Response) {
    return this.service.getById({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getBySub(sub: string, response: Response) {
    return this.service.getBySub({ sub }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async getList(query: QueryUserDto, response: Response) {
    query = mutateQuery(query);

    return this.service.getList({ ...query }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async create(dto: UserDto, response: Response) {
    return this.service.create({ ...dto }, (error, res) => {
      response.send(error ?? res);
    });
  }

  async update(dto: UpdateUserDto, response: Response) {
    return this.service.update({ ...dto }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async delete(id: string, response: Response) {
    return this.service.delete({ id: +id }, (error, res) =>
      response.send(error ?? res),
    );
  }

  async deleteBySub(sub: string, response: Response) {
    try {
      const data = await this.cognitoService.deleteUserHandler({ sub });
      if (data) {
        return await this.service.deleteBySub({ sub }, (error, res) => {
          response.send(error ?? res);
        });
      }
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }
}
