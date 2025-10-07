import {Locator, Page, expect, chromium} from '@playwright/test';
import fs from 'fs';
import { SidebarSelectors } from '../selector/sidebar.selector';
import { AuthHelper, STORAGE_STATE_PATH } from '../helpers/auth.helper';



export class SideBar {

    private readonly sidebar : SidebarSelectors;
    public readonly page : Page;

    constructor(page : Page) {
        this.page = page; 
        this.sidebar = new SidebarSelectors(page);
    }

    static async init(): Promise<SideBar> {
        
        const context = await AuthHelper.createContextWithAuth(STORAGE_STATE_PATH);
        const page = await context.newPage();

        await page.goto('/home');
        console.log('Authenticated and navigated to /home');

        return new SideBar(page);
    }
    
    async navigateTo(menu : Locator, expectedUrl : string) {
        
        // Click on the sidebar menu item based on the linkName 
        await menu.click();
        await expect(this.page).toHaveURL(new RegExp(expectedUrl));
        await this.page.waitForSelector('#spinner-box', { state: 'hidden' }); 

        console.log(`Navigated to ${expectedUrl} successfully`);
    }
}