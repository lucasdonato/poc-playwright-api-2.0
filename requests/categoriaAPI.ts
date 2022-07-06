

const endpoint = process.env.URL + '/categorias'

export class requestCategoria {

    static async post(categoria: Object, request: any) {

        const response = await request.post(endpoint, { data: categoria });
        const responseBody = JSON.parse(await response.text())

        return { body: responseBody, status: response.status() }
    }
}