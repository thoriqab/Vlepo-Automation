import {Locator, Page, expect, chromium} from '@playwright/test';
import fs from 'fs';
import { SidebarSelectors } from '../selector/sidebar.selector';
import { AuthHelper, STORAGE_STATE_PATH } from '../helpers/auth.helper';
import { BasePage } from './base.page';


export class SideBar extends BasePage {

    private readonly sidebar : SidebarSelectors;
    
    constructor(page : Page) {
        super(page);
        this.sidebar = new SidebarSelectors(page);
    }

    static async init(): Promise<SideBar> {
        
        const context = await AuthHelper.createContextWithAuth(STORAGE_STATE_PATH);
        const page = await context.newPage();

        await page.goto('/home');
        console.log('Authenticated and navigated to /home');

        return new SideBar(page);
    }

}