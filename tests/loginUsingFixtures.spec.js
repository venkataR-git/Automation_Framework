import {test, expect} from '../pages/pageManager'

const data = JSON.parse(JSON.stringify(require("../testdata/testdata.json")))

test("Login To Application", async({page, loginPage, homePage})=>{

    await page.goto(data.url)

    await loginPage.loginToApp(data.username,data.password)

    await homePage.validateDashboardHeader()
    await homePage.logoutOfApp()

    await loginPage.validateLoginHeader()

})