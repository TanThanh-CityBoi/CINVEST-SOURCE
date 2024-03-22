declare namespace Express {
  export interface Request {
    user?: null | import('../../src/modules/user/service').UserEntity;
  }
}
