import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/login.page';
import {ENV} from '../../config/env';

test.describe('Login Tests', () => {
    test('Default user can login', async ({page}) => {
        const loginPage = new LoginPage(page);
    
        await loginPage.login(ENV.defaultEmail, ENV.defaultPassword);
        await expect(page).toHaveURL(/.*\/home/);
        await expect(page.locator('header')).toBeVisible();
    });

    test('Superadmin user can login', async ({page}) => {
        const loginPage = new LoginPage(page);
    
        await loginPage.login(ENV.defaultEmail, ENV.defaultPassword);
        await expect(page).toHaveURL(/.*\/home/);
        await expect(page.locator('header')).toBeVisible();
    });

    test('Admin user can login', async ({page}) => {
        const loginPage = new LoginPage(page);
    
        await loginPage.login(ENV.adminEmail, ENV.adminPassword);
        await expect(page).toHaveURL(/.*\/home/);
        await expect(page.locator('header')).toBeVisible();
    });
});
