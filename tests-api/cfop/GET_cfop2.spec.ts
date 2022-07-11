import { test, expect } from '@playwright/test';
import { reqCFOP } from '../../support/requests/cfopAPI'

test('GET CFOP 1', async ({ request }) => {
    const { status } = await reqCFOP.get(request);

    expect(status).toBe(200)
});
test('GET CFOP 2', async ({ request }) => {
    const { status } = await reqCFOP.get(request);

    expect(status).toBe(200)
});
test('GET CFOP 3', async ({ request }) => {
    const { status } = await reqCFOP.get(request);

    expect(status).toBe(200)
});
test('GET CFOP 4', async ({ request }) => {
    const { status } = await reqCFOP.get(request);

    expect(status).toBe(200)
});