import { Page } from '@playwright/test';

export class LoginPage {
    private username = '#user-name';
    private password = '"password';
    private loginBtn = '#login-button';

    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('/');
    }

    async login(user: string, pass: string) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }

}