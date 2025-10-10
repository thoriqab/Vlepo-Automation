import { Page, Locator, expect } from '@playwright/test'; 

export class BasePage {
    protected readonly page: Page; 

    constructor( page : Page) {
        this.page = page;
    }

    /**
     * Navigate to specified URL and Page
     */

    async navigateTo(menu: Locator, expectedUrl: string) {

        await menu.click();

        await expect(this.page).toHaveURL(new RegExp(expectedUrl));

        await this.page.waitForSelector('#spinner-box', {state : 'hidden'}).catch(() => {
            console.warn('Spinner not found');
        });
        
        console.log(`Navigated to ${expectedUrl} successfully`);
    }
}