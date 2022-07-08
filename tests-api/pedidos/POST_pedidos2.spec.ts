import { test, expect } from '@playwright/test';
import { reqPedidos } from '../../support/requests/pedidoAPI'
import faker from 'faker-br'

test.describe('POST /pedidos', () => {
    test('dados completos', async ({ request }) => {
        const { status } = await reqPedidos.post({ numero: faker.random.number() }, request);
        expect(status).toBe(201)
    });
})
test.describe('POST /pedidos 2', () => {
    test('dados completos', async ({ request }) => {
        const { status } = await reqPedidos.post({ numero: faker.random.number() }, request);
        expect(status).toBe(201)
    });
})
test.describe('POST /pedidos 3', () => {
    test('dados completos', async ({ request }) => {
        const { status } = await reqPedidos.post({ numero: faker.random.number() }, request);
        expect(status).toBe(201)
    });
})