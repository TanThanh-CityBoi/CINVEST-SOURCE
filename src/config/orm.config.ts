import { registerAs } from '@nestjs/config';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_SYNCHRONIZE,
  DATABASE_USER_NAME,
} from 'src/common/constants/constants';
import { DataSource, DataSourceOptions } from 'typeorm';

export const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: +DATABASE_PORT,
  username: DATABASE_USER_NAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: DATABASE_SYNCHRONIZE,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
};

export default registerAs('ormConfig', () => ormConfig);
export const dataSource = new DataSource(ormConfig);
