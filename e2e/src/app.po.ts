import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getParagraphText() {
        return element(by.css('mat-toolbar-row')).getText() as Promise<string>;
    }
}
