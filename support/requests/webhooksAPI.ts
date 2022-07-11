

const endpoint = process.env.URL_BASE + '/webhooks'

export class reqWebhooks {

    static async post(webhook: Object, request: any) {

        const response = await request.post(endpoint, { data: webhook });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }
}