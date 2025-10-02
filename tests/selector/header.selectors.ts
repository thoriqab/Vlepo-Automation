import {Page, Locator, expect} from '@playwright/test';

export class HeaderSelectors {
    readonly container : Locator;
    readonly headerLogo : Locator; 
    readonly logTo : Locator;
    readonly dropdownBar : Locator;  
    readonly dropdownArrow : Locator; 
    readonly dropdownOptions : Locator;
    readonly originalAccount : Locator;

    constructor(private page : Page) {
        this.container = page.locator('#floating-header'); 
        this.headerLogo = this.page.getByRole('img', { name : 'logo'});
        this.dropdownBar = this.container.locator('.select2-selection--single'); 
        this.logTo = this.container.getByText('Log to:');
        this.dropdownArrow = this.dropdownBar.locator('.select2-selection__arrow');
        this.originalAccount = this.container.getByRole('textbox', {name: 'Original Account'});
        this.dropdownOptions = this.page.locator('.select2-results__option');
    }
}