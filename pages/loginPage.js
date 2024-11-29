const { expect } = require("@playwright/test")

exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        this.userNameInput = "//input[@placeholder='Username']"
        this.passwordInput = "//input[@placeholder='Password']"
        this.submitButton = "button[type='submit']"
        this.loginHeader = "//h5[normalize-space()='Login']"
    }

    async loginToApp(username,password){
        await this.page.fill(this.userNameInput,username)
        await this.page.fill(this.passwordInput,password)
        await this.page.click(this.submitButton)
    }

    async validateLoginHeader(){
        await expect(this.page.locator(this.loginHeader)).toBeVisible()
    }
}