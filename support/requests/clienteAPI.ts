

const endpoint = process.env.URL_BASE + '/clientes'

export class reqCliente {

    static async post(cliente: Object, request: any) {
        const response = await request.post(endpoint, { data: cliente, });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status(), headers: response.headers() }
    }
}