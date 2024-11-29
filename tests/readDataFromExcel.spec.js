import {test, expect} from '@playwright/test'
// import { error } from 'console'
import * as xlsx from 'xlsx'

test("Get data from excel", async ({page})=>{

    const filePath = 'testdata/userdata.xlsx'
    const sheetName = 'Sheet1';

    const data = getData(filePath,sheetName)

    for(const value of data)
    {
        console.log(value.Age)
    }


})

function getData(filePath,sheetName)
{
    try
    {
        const workbook = xlsx.readFile(filePath);
        if(!workbook.SheetNames.includes(sheetName))
        {
            throw new Error(`Sheet "${sheetName}" not found in the workbook.`)
        }

        const worksheet = workbook.Sheets[sheetName]
        const data = xlsx.utils.sheet_to_json(worksheet)

        return data;
    } catch (error) {
        console.error('Error reading Excel file:', error.message);
        return undefined;
    }
    
}