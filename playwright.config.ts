import { type PlaywrightTestConfig, devices } from '@playwright/test';
require('dotenv').config()

const config: PlaywrightTestConfig = {
    reporter: [['html', { outputFolder: 'reports' }]],
    globalSetup: require.resolve('./global-setup'),
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    testDir: 'tests-api/',
    fullyParallel: true,
    workers: 10,
    use: {
        screenshot: "only-on-failure",
        extraHTTPHeaders: {
            'Authorization': `Bearer ${process.env.token}`
        },
        baseURL: process.env.URL_BASE
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};
export default config;