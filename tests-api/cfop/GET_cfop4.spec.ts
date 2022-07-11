import { test, expect } from '@playwright/test';
import { reqCFOP } from '../../support/requests/cfopAPI'

test('GET CFOP by ID', async ({ request }) => {
    const { status } = await reqCFOP.getID(1, request);

    expect(status).toBe(200)
});