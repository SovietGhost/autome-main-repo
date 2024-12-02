import { Redis } from "ioredis";

export const pubRedis = Redis.createClient();
export const subRedis = Redis.createClient();
