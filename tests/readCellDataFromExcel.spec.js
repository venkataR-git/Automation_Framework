import {test, expect} from '@playwright/test'
import xlsx from 'xlsx'

test("Read data from Excel", async({page})=>{

const filePath = 'testdata/testdata.xlsx'
const sheetName = 'Sheet1';
//const cellAddress = 'B2';

const var1 = getCellValueFromExcel(filePath, sheetName, 'A2')
const var2 = getCellValueFromExcel(filePath, sheetName, 'B2')

console.log("Variable 1: "+var1)
console.log("Variable 2: "+var2)

})

function getCellValueFromExcel(filePath, sheetName, cellAddress) 
{
    try 
    {
        // Load the workbook from the file
        const workbook = xlsx.readFile(filePath);

        // Check if the specified sheet exists
        if (!workbook.SheetNames.includes(sheetName)) 
        {
            throw new Error(`Sheet "${sheetName}" not found in the workbook.`);
        }

        // Get the worksheet
        const worksheet = workbook.Sheets[sheetName];
                // Get the cell value
                const cell = worksheet[cellAddress];
                return cell ? cell.v : undefined; // Return the value, or undefined if the cell doesn't exist
    } catch (error) 
        {
            console.error('Error reading Excel file:', error.message);
            return undefined;
        }
}
