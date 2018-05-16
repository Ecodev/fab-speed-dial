import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display title', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('FAB Speed Dial');
    });
});
