import {Page, Locator, expect} from '@playwright/test';

export class loginSelectors {

    readonly emailField: Locator;
    readonly passwordField: Locator; 
    readonly loginBtn: Locator; 

    
    constructor(private page: Page) {

        this.emailField = page.locator('input[name="email"]'); 
        this.passwordField = page.locator('input[name="password"]'); 
        this.loginBtn = page.locator('button[type="submit"]');
    }
        siteDropdown(name: string): Locator { 
            return this.page.getByRole('option', {name});
    }    
        
}
