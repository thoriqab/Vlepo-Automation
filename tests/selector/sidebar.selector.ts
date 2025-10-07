import {Page, Locator, expect} from '@playwright/test';

export class SidebarSelectors {
    readonly dashboard : Locator; 
    readonly company : Locator; 
    readonly site : Locator;
    readonly user : Locator;
    readonly accessprivilege : Locator;
    readonly layout : Locator;  
    readonly content : Locator;
    readonly device : Locator;
    readonly entertainment : Locator;
    readonly gallery : Locator;
    readonly message : Locator;
    readonly emergency : Locator;
    readonly livetv : Locator; 
    readonly advertisement : Locator;
    readonly medialibrary : Locator;
    readonly runningtext : Locator;
    readonly housekeeping : Locator;
    readonly spinner : Locator; 

    constructor(private page : Page) {
        this.dashboard = page.getByRole('link', { name : 'Dashboard'});
        this.company = page.getByRole('link', { name : 'Company'});
        this.site = page.getByRole('link', { name : 'Site'});
        this.user = page.getByRole('link', { name : 'User'});
        this.accessprivilege = page.getByRole('link', { name : 'Access Privilege'});
        this.layout = page.getByRole('link', { name : 'Layout'});
        this.content = page.getByRole('link', { name : 'Content'});
        this.device = page.getByRole('link', { name : 'Device'});
        this.entertainment = page.getByRole('link', { name : 'Entertainment'});
        this.gallery = page.getByRole('link', { name : 'Gallery'});
        this.message = page.getByRole('link', { name : 'Message'});
        this.emergency = page.getByRole('link', { name : 'Emergency'});
        this.livetv = page.getByRole('link', { name : 'Live TV Channel'});
        this.advertisement = page.getByRole('link', { name : 'Advertisement'});
        this.medialibrary = page.getByRole('link', { name : 'Media Library'});
        this.runningtext = page.getByRole('link', { name : 'Running Text'});
        this.housekeeping = page.getByRole('link', { name : 'Housekeeping'});
        this.spinner = page.locator('#spinner-box');
    }
}