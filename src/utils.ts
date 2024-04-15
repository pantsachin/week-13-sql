import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://hedmyvht:nsVHOjznQ3DNERnk8yrzX2hwKAJW2d8A@floppy.db.elephantsql.com/hedmyvht");
    await client.connect();
    return client;
}