import { test, expect } from '@playwright/test';
import { pedido } from '../../support/factories/pedidos'
import { produto } from '../../support/factories/produtos'
import { reqPedidos } from '../../support/requests/pedidoAPI'
import { reqProdutos } from '../../support/requests/produtoAPI'

test.beforeAll(async ({ request }) => {
    await reqProdutos.vincularProduto(produto, pedido, request)
})

test.describe('POST /pedidos', () => {
    test('dados completos', async ({ request }) => {
        const { status } = await reqPedidos.post(pedido, request);
        expect(status).toBe(201)
    });
})