import {Page, expect} from '@playwright/test';
import { HeaderSelectors } from '../selector/header.selectors';
import {ENV} from '../config/env';

export class SelectSitePage {

    private readonly head : HeaderSelectors;

    constructor(public readonly page : Page) {
        this.head = new HeaderSelectors(page);
    }

     async selectSite(siteName: string): Promise<void> {
        
        await this.page.goto(`${ENV.baseURL}home`, { timeout: 15000 }); 
        await expect(this.head.headerLogo).toBeVisible({ timeout: 15000 });
        console.log('Logo is visible');

        await this.head.headerLogo.click();
        await this.page.waitForLoadState('networkidle'); 
        // await expect(this.head.logTo).toBeVisible({ timeout: 15000 });
        // console.log('Log to is visible'); 
        await this.head.dropdownArrow.click();
        // await expect(this.head.dropdownOptions).toBeVisible({ timeout: 15000 });
        await this.head.dropdownOptions.filter({ hasText: siteName }).click();
    }
};