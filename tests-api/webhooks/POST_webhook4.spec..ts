import { test, expect } from '@playwright/test';
import { webhook } from '../../support/factories/webhook'
import { reqWebhooks } from '../../support/requests/webhooksAPI'

test.describe('POST /webhoos', () => {
    test('dados completos', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 2', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 3', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 4', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 5', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 6', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
    test('dados completos 7', async ({ request }) => {
        const { body, status } = await reqWebhooks.post(webhook, request);
        expect(status).toBe(201)
        expect(body.nome_integracao).toBe(webhook.nome_integracao)
    });
})