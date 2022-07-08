import { type PlaywrightTestConfig, devices } from '@playwright/test';
require('dotenv').config()

const config: PlaywrightTestConfig = {
    reporter: [
        ['list'],
        ['html', { outputFolder: 'reports' }]
    ],
    globalSetup: require.resolve('./global-setup'),
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    testDir: 'tests-api/',
    fullyParallel: true,
    workers: 1,
    use: {
        trace: "on-first-retry",
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