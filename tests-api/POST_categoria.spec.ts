import { test, expect } from '@playwright/test';
import { categoria } from '../support/factories/categorias'
import { requestCategoria } from '../support/requests/categoriaAPI'

test.describe.parallel('POST /categorias', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await requestCategoria.post(categoria, request);

        expect(status).toBe(201)
        expect(body.descricao).toBe(categoria.descricao)
        expect(body.tipo).toBe(categoria.tipo)
    });
    test('categoria sem descricao', async ({ request }) => {
        const { body, status } = await requestCategoria.post({ localizacao: 'aaa' }, request);

        expect(status).toBe(422)
        expect(body.errors[0].message).toBe('Missing required property: descricao')
    })
    test('categoria body vazio', async ({ request }) => {
        const { body, status } = await requestCategoria.post({}, request);

        expect(status).toBe(400)
        expect(body.message).toBe("Required parameters missing at request body: Param 'Categoria' of type 'object'")
    })
})