import { test, expect } from '@playwright/test';
import { cliente1, cliente2, cliente3, cliente4 } from '../../support/factories/cliente'
import { reqCliente } from '../../support/requests/clienteAPI'

test.describe('POST /clientes', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await reqCliente.post(cliente1, request);

        expect(status).toBe(201)
        expect(body.razao_social).toBe(cliente1.razao_social)
    });
})
test.describe('POST /clientes 2', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await reqCliente.post(cliente2, request);

        expect(status).toBe(201)
        expect(body.razao_social).toBe(cliente2.razao_social)
    });
})
test.describe('POST /clientes 3', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await reqCliente.post(cliente3, request);

        expect(status).toBe(201)
        expect(body.razao_social).toBe(cliente3.razao_social)
    });
})
test.describe('POST /clientes 4', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await reqCliente.post(cliente4, request);

        expect(status).toBe(201)
        expect(body.razao_social).toBe(cliente4.razao_social)
    });
})