import { request } from '@playwright/test';

const database = require('./support/database/functions')

async function globalSetup() {
    if (process.env.NODE_ENV != 'production') {
        await database.dropDatabase()
    }

    const requestContext = await request.newContext();

    let requestJWT =
        await requestContext.post(`${process.env.URL_BASE}/login`, {
            data: {
                username: process.env.USUARIO,
                password: process.env.SENHA
            }
        });

    const { token } = await requestJWT.json()
    process.env.token = token
}

export default globalSetup;