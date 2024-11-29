import {test, expect} from '@playwright/test'

test("Download file", async ({page})=>{
    await page.goto('https://commitquality.com/practice-file-download')

    const waitForDownloadEvent = page.waitForEvent('download')

    await page.getByRole('button',{name:'Download file'}).click()
    const download = await waitForDownloadEvent

    await download.saveAs('./'+ download.suggestedFilename())
})