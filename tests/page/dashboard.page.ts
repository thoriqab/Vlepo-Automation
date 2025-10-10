import { Locator, Page, expect } from '@playwright/test';
import fs from 'fs';
import { DashboardSelectors } from '../selector/dashboard.selector';
import { AuthHelper, STORAGE_STATE_PATH } from '../helpers/auth.helper';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage{

    private readonly dashboard : DashboardSelectors;

    constructor(page : Page) {
        super (page); 
        this.dashboard = new DashboardSelectors(page); 
    }

    static async init(): Promise<DashboardPage> {

        const context = await AuthHelper.createContextWithAuth(STORAGE_STATE_PATH);
        const page = await context.newPage();

        await page.goto('/home');
        console.log('Authenticated and navigated to /home');

        return new DashboardPage(page);
    }

    async verifyDashboardElements() {

        await this.navigateTo(this.dashboard.dashboardDisplay, '/home');
    }
}