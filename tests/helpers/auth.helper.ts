import { BrowserContext, chromium, Page } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { ENV } from '../config/env';
import fs from 'fs'; 

export const STORAGE_STATE_PATH = 'tests/storage/auth.json';

export class AuthHelper {

static async loginAndSave(email = ENV.defaultEmail, password =  ENV.defaultPassword, statePath = STORAGE_STATE_PATH){
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
}