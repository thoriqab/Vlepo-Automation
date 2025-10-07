import { SideBar } from '../../page/sidebar.page';
import { test, expect } from '@playwright/test';


test.describe('All Sidebar Access', () => {
    
    let sidebar: SideBar;
    let sidebarSelectors: any; 

    test.beforeAll( async () => {
        sidebar = await SideBar.init()
        sidebarSelectors = sidebar['sidebar']; 
    });

    test('Dashboard Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.dashboard, '/home'); 
    });

    test('Device Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.device, '/device'); 
    });

    test('Company Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.company, '/company'); 
    });

    test('Site Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.site, '/site'); 
    });

    test('User Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.user, '/user'); 
    });

    test('Privilege Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.accessprivilege, '/access'); 
    });

    test('Content Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.content, '/content/group'); 
    });

    test('Entertainment Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.entertainment, '/entertainment/toggle'); 
    });

    test('Gallery Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.gallery, '/gallery'); 
    });

    test('Message Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.message, '/message'); 
    });

    test('Emergency Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.emergency, '/emergency'); 
    });

    test('Live TV Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.livetv, '/toggle'); 
    });

    test('Advertisement Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.advertisement, '/advertisement/advertisement'); 
    });

    test('Media Library Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.medialibrary, '/library'); 
    });

    test('Running Text Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.runningtext, '/text'); 
    });

    test('Housekeeping Sidebar', async () => {
        await sidebar.navigateTo(sidebarSelectors.housekeeping, '/rooms'); 
    });

});