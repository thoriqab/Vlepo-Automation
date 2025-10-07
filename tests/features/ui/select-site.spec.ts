import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/login.page';
import { SelectSitePage } from '../../page/selectsite.page';
import {ENV} from '../../config/env'; 


test.describe('Select Site Tests', () => {
    test('Superadmin Login and Select Site', async ({page}) => {
        const loginpage = new LoginPage(page);
        const selectsite = new SelectSitePage(page); 

        await loginpage.login(ENV.defaultEmail, ENV.defaultPassword);
        await expect(page).toHaveURL(/.*\/home/);
        await expect(page.locator('header')).toBeVisible();

        await selectsite.selectSite('Percobaan 95');
        await expect(page).toHaveURL(/.*\/home/);
        await expect(page.locator('header')).toBeVisible();
        console.log('Site Selected Successfully');

    });
});