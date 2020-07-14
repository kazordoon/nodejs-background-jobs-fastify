import { RedisOptions } from 'ioredis';

const redisConfig: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

export default redisConfig;
