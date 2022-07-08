

const endpoint = process.env.URL_BASE + '/pedidos'

export class reqPedidos {

    static async post(pedido: Object, request: any) {

        const response = await request.post(endpoint, { data: pedido });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }
}