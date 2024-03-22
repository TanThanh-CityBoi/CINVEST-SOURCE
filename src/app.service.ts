import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  async healthcheck() {
    return 200;
  }
}
