import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard, AuthorizationGuard } from '@nestjs-cognito/auth';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';
import { CognitoGroupEnum, PackageEnum } from 'src/common/enums/enums';

import { QueryUserDto } from './dto/query.dto';
import { UpdateUserDto } from './dto/update.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './service';

@Controller(CONTROLLER_ENUM.USER)
@ApiTags(PackageEnum.USER)
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getList(@Query() query: QueryUserDto, @Res() res: Response) {
    return this.service.getList(query, res);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() dto: UserDto, @Res() res: Response) {
    return this.service.create(dto, res);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @Res() res: Response,
  ) {
    return this.service.update(dto, res);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    return this.service.delete(id, res);
  }

  @ApiParam({
    name: 'sub',
    type: String,
    required: true,
  })
  @UseGuards(
    AuthenticationGuard,
    AuthorizationGuard({
      allowedGroups: [CognitoGroupEnum.ADMIN],
    }),
  )
  @Delete('sub/:sub')
  async deleteBySub(@Param('sub') sub: string, @Res() res: Response) {
    return this.service.deleteBySub(sub, res);
  }

  @ApiParam({
    name: 'sub',
    type: String,
    required: true,
  })
  @Get('/sub/:sub')
  async getBySub(@Param('sub') sub: string, @Res() res: Response) {
    return await this.service.getBySub(sub, res);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
  })
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    return await this.service.getById(id, res);
  }
}
