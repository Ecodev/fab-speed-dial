import {expect, test} from '@playwright/test';
import {AppPage} from './app.po';

test.describe('workspace-project App', () => {
    let app: AppPage;

    test.beforeEach(({page}) => {
        app = new AppPage(page);
    });

    test('should display title', async ({page}) => {
        await page.goto('/');
        expect(await app.getParagraphText()).toContain('FAB Speed Dial');
    });
});
