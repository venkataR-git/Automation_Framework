import {test as base} from '@playwright/test'
import { LoginPage } from './loginPage'
import {HomePage} from './homePage'

export const test = base.extend({
    loginPage: async ({page},use)=>{
        const loginPage = new LoginPage(page);
        use(loginPage);
    },

    homePage: async ({page},use)=>{
        const homePage = new HomePage(page);
        use(homePage);
    }
}) 
export const expect = test.expect;
