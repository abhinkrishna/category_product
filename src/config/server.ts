import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV;

export default {
    name: (env === 'production') ? process.env.SERVER_NAME_PRODUCTION : process.env.SERVER_NAME_DEVELOPMENT,
    host: (env === 'production') ? process.env.SERVER_HOST_PRODUCTION : process.env.SERVER_HOST_DEVELOPMENT,
    port: (env === 'production') ? process.env.SERVER_PORT_PRODUCTION : process.env.SERVER_PORT_DEVELOPMENT
}