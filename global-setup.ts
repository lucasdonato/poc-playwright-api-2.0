import { request } from '@playwright/test';

async function globalSetup() {
    const requestContext = await request.newContext();

    let requestJWT =
        await requestContext.post(`${process.env.URL}/login`, {
            data: {
                username: process.env.USUARIO,
                password: process.env.SENHA
            }
        });

    const { token } = await requestJWT.json()
    process.env.token = token
}

export default globalSetup;