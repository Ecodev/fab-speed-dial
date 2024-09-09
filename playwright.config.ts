import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './e2e/',
    outputDir: __dirname + '/logs/tests/e2e/',
    use: {
        baseURL: process.env.E2E_BASE_URL ?? 'http://localhost:4212/',
        headless: true,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        video: {
            mode: 'on',
            size: {
                width: 1280,
                height: 720,
            },
        },
    },
    webServer: {
        command: 'yarn dev',
        port: 4212,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
};

export default config;
