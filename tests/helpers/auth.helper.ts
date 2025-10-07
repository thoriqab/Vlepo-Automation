import { BrowserContext, chromium, Page } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { ENV } from '../config/env';
import fs from 'fs'; 

export const STORAGE_STATE_PATH = 'tests/storage/auth.json';

export class AuthHelper {

    static async loginAndSave(email = ENV.adminEmail, password =  ENV.adminPassword, statePath = STORAGE_STATE_PATH){
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.login(email, password);

        await context.storageState({path: statePath});
        console.log(`Auth state saved to ${statePath}`);
    }

    static async isSessionExpired(statePath = STORAGE_STATE_PATH): Promise<boolean> {
        if (!fs.existsSync(statePath)) return true;


        const storage = JSON.parse(fs.readFileSync(statePath, 'utf-8'));

        const cookies = storage.cookies || [];
        const now = Math.floor(Date.now() / 1000);

        return cookies.some(
            (cookie: any) => cookie.expires && cookie.expires !== -1 && cookie.expires < now
        );
    }

    static async ensureAuthState(statePath = STORAGE_STATE_PATH) {
        const expired = await this.isSessionExpired(statePath);

        if (expired) {
            console.log('Session missing or expired, Performing Login...');
            await this.loginAndSave(ENV.adminEmail, ENV.adminPassword, statePath);
        } else {
            console.log('Vlaid Auth State Found'); 
        }
    }

    static async createContextWithAuth(statePath = STORAGE_STATE_PATH): Promise<BrowserContext> {
        await this.ensureAuthState(statePath);
        const browser = await chromium.launch();
        const context = await browser.newContext({ storageState: statePath });
        return context; 
    }
}