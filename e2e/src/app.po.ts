import {Page} from '@playwright/test';

export class AppPage {
    constructor(private readonly page: Page) {}

    public getParagraphText(): Promise<string> {
        return this.page.innerText('mat-toolbar-row');
    }
}
