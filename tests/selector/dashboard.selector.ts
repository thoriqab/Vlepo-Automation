import { Page, Locator } from '@playwright/test';

export class DashboardSelectors {
  readonly statusCard: Locator;
  readonly statusTitle: Locator;
  readonly subscriptionStatus: Locator;
  readonly subscriptionExpiry: Locator;

  readonly devicesCard: Locator;
  readonly devicesTitle: Locator;
  readonly deviceTotal: Locator;
  readonly deviceOnline: Locator;

  readonly usersCard: Locator;
  readonly usersTitle: Locator;
  readonly userTotal: Locator;

  readonly welcomeCard: Locator;
  readonly welcomeTitle: Locator;
  readonly dashboardDisplay: Locator;
  readonly dashboardPlacer: Locator;
  readonly dashboardWelcomeText: Locator;

  constructor(public readonly page: Page) {
    // === STATUS CARD ===
    this.statusCard = page.locator('#dashboard-stat-box .dashboard-stat-placer').nth(0);
    this.statusTitle = this.statusCard.locator('h4', { hasText: 'Status' });
    this.subscriptionStatus = this.statusCard.locator('[data-source="subscription-status"]');
    this.subscriptionExpiry = this.statusCard.locator('[data-source="subscription-expiry"]');

    // === DEVICES CARD ===
    this.devicesCard = page.locator('#dashboard-stat-box .dashboard-stat-placer').nth(1);
    this.devicesTitle = this.devicesCard.locator('h4', { hasText: 'Devices' });
    this.deviceTotal = this.devicesCard.locator('[data-source="device-total"]');
    this.deviceOnline = this.devicesCard.locator('[data-source="device-online"]');

    // === USERS CARD ===
    this.usersCard = page.locator('#dashboard-stat-box .dashboard-stat-placer').nth(2);
    this.usersTitle = this.usersCard.locator('h4', { hasText: 'Users' });
    this.userTotal = this.usersCard.locator('[data-source="user-total"]');

    // === WELCOME CARD ===
    this.welcomeCard = page.locator('.styled-card.mt-3');
    this.welcomeTitle = this.welcomeCard.locator('.card-header h3', { hasText: 'Welcome to Vlepo Cast' });
    this.dashboardDisplay = this.welcomeCard.locator('#dashboard-display');
    this.dashboardPlacer = this.dashboardDisplay.locator('#dashboard-placer');
    this.dashboardWelcomeText = this.dashboardPlacer.locator('h3', { hasText: 'Welcome to Vlepo Dashboard' });
  }
}
