import { DashboardPage } from '../../page/dashboard.page';
import { test, expect } from '@playwright/test';


test.describe('Dashboard Elements', () => {

    let dashboard : DashboardPage;
    let dashboardSelectors : any; 

    test.beforeAll( async () => {
        dashboard = await DashboardPage.init()
        dashboardSelectors = dashboard['dashboard'];
    });

    test('Dashbaord Status Elements', async () => {
        await dashboard.verifyDashboardElements();
    });
});