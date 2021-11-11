import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const node_env = process.env.NODE_ENV;

const defaultPGConfig: ConnectionOptions = {
   "type": "postgres",
   "name": "default" as string,
   "host": (node_env === 'production') ? process.env.PG_HOST_PRODUCTION : process.env.PG_HOST_DEVELOPMENT as string,
   "port": Number((node_env === 'production') ? process.env.PG_PORT_PRODUCTION : process.env.PG_PORT_DEVELOPMENT) as number,
   "username": (node_env === 'production') ? process.env.PG_USERNAME_PRODUCTION : process.env.PG_USERNAME_DEVELOPMENT as string,
   "password": (node_env === 'production') ? process.env.PG_PASSWORD_PRODUCTION : process.env.PG_PASSWORD_DEVELOPMENT as string,
   "database": (node_env === 'production') ? process.env.PG_DATABASE_PRODUCTION : process.env.PG_DATABASE_DEVELOPMENT as string,
   "synchronize": (node_env === 'production') ? false : true,
   "logging": false,
   "entities": [
      __dirname + "/../**/*.entity{.ts,.js}"
   ],
   "migrations": [
      __dirname + "/../**/*.migration{.ts,.js}"
   ],
   "subscribers": [
      __dirname + "/../**/*.subcriber{.ts,.js}"
   ]
}

export default defaultPGConfig;