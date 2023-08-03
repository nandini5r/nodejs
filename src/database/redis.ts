 import { createClient } from 'redis';

export const RedisClient = createClient();

RedisClient.on('error', err => console.log('Redis Client Error', err));

export async function redis(){
    
    await RedisClient.connect();
    console.log("REDIS CONNECTED");
    
}