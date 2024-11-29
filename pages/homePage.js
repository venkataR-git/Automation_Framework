import {expect} from '@playwright/test'
exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        this.dashboardHeader = "//h6[normalize-space()='Dashboard']"
        this.userMenu = "//p[@class='oxd-userdropdown-name']"
        this.logout = "//a[normalize-space()='Logout']"
    }

    async validateDashboardHeader(){
        await expect(this.page.locator(this.dashboardHeader)).toBeVisible()
    }

    async logoutOfApp(){
        await this.page.click(this.userMenu)
        await this.page.click(this.logout)
    }
}