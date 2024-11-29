import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import {HomePage} from '../pages/homePage'

const data = JSON.parse(JSON.stringify(require("../testdata/testdata.json")))

test("Login To Application", async({page})=>{

    await page.goto(data.url)

    const loginPage = new LoginPage(page)
    await loginPage.loginToApp(data.username,data.password)

    const homePage = new HomePage(page)
    await homePage.validateDashboardHeader()
    await homePage.logoutOfApp()

    await loginPage.validateLoginHeader()

})