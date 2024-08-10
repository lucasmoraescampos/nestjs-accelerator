import { DataSource } from 'typeorm';
import { env } from '../utils';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: env('DATABASE_HOST'),
  port: Number(env('DATABASE_PORT')),
  username: env('DATABASE_USER'),
  password: env('DATABASE_PASSWORD'),
  database: env('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});
