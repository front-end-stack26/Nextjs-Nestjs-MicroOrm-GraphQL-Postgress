import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Options<PostgreSqlDriver> = {
  driver: PostgreSqlDriver,
  dbName: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined,

  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
};

export default config;