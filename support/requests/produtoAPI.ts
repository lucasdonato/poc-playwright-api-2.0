
const endpoint = process.env.URL_BASE + '/produtos'

export class reqProdutos {

    static async post(produto: Object, request: any) {

        const response = await request.post(endpoint, { data: produto });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }

    static async vincularProduto(produto: object, movimentacao: Object, request: any) {
        let { body } = await this.post(produto, request)

        movimentacao['itens'][0].produto_servico = body.id
    }
}