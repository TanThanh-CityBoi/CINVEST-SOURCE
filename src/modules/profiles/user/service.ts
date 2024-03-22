import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ClientEnum, ServicesEnum } from 'src/common/enums/enums';
import { TPaginationResult } from 'src/common/types';
import { mutateQueryForUser } from 'src/common/utils/mutate-for-user.utils';
import { User } from 'src/proto/types/users/User';
import { QueryUserDto } from './dto/query.dto';

@Injectable()
export class UserService {
  private grpcService;
  constructor(
    @Inject(ClientEnum.PROFILE) private readonly client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.grpcService = this.client.getService(ServicesEnum.USER);
  }
  async getBySub(sub: string) {
    return this.grpcService.getBySub({ sub });
  }

  async getList(query: QueryUserDto): Promise<TPaginationResult<User>> {
    query = mutateQueryForUser(query);
    return firstValueFrom(this.grpcService.getList({ ...query }));
  }
}
