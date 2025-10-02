import {Page, expect} from '@playwright/test';
import {loginSelectors} from '../selector/login.selectors';
import {ENV} from '../config/env';

export class LoginPage {
    
    private readonly sel: loginSelectors;

    constructor(public readonly page: Page) {
        this.sel = new loginSelectors (page);
    }

    // Navigate to Vlepo Login Page
    async navigate(): Promise<void> {
        await this.page.goto(ENV.baseURL);
        await this.sel.emailField.waitFor({ state: 'visible', timeout: 60000}); 
        console.log('Navigated to Vlepo Login');
    }
    
    
    // Perfrom Login Action
    async login(
        email : string = ENV.defaultEmail, 
        password: string = ENV.defaultPassword)
        : Promise<void> {
        
        await this.navigate();

        //Fill the Credentials and Submit
        await expect(this.sel.emailField).toBeVisible({ timeout: 60000 });
        await this.sel.emailField.fill(email);
        console.log(`Email entered: ${email}`);
        await this.sel.passwordField.fill(password);
        console.log('Password entered');
        
        await Promise.all([
            this.page.waitForURL(/.*\/home/, { timeout: 15000 }),
            this.sel.loginBtn.click(),
        ]);


        await this.page.waitForLoadState('networkidle'); 

        console.log(`Login Success ${this.page.url()}`);
    }
    
}