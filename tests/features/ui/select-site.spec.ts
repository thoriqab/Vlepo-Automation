import { test, expect } from '@playwright/test';
import { test as authTest } from '../../fixtures/auth.fixture'; 
import { SelectSitePage } from '../../page/selectsite.page';

authTest('Select Site', async ({page}) => {
    const selectSite = new SelectSitePage(page);
    
    await page.goto('/home');
    await selectSite.selectSite('HOTEL BARU 3'); 
    });

test.describe