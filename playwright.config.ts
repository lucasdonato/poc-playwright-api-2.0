import { type PlaywrightTestConfig, devices } from '@playwright/test';
require('dotenv').config()

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./global-setup'),
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    testDir: 'tests-api/',
    use: {
        screenshot: "only-on-failure",
        extraHTTPHeaders: {
            'Authorization': `Bearer ${process.env.token}`
        },
        baseURL: process.env.URL
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};
export default config;