import {Page} from '@playwright/test';

export class AppPage {
    public constructor(private readonly page: Page) {}

    public getParagraphText(): Promise<string> {
        return this.page.innerText('mat-toolbar-row');
    }
}
