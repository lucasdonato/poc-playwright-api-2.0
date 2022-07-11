

const endpoint = process.env.URL_BASE + '/cfops'

export class reqCFOP {

    static async get(request: any) {

        const response = await request.get(endpoint);
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }
}