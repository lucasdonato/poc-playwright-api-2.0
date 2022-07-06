

const endpoint = process.env.URL_BASE + '/categorias'

export class reqCategoria {

    static async post(categoria: Object, request: any) {

        const response = await request.post(endpoint, { data: categoria });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }
}