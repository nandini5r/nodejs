import { createClient } from 'redis';

export const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

export async function redis(){
    
    await client.connect();
    console.log("REDIS CONNECTED");
    
}