import * as xlsx from 'xlsx';

export function getSeqId() 
{
    try 
    {
        const filePath = 'testdata/testdata.xlsx'
        const sheetName = 'Sheet1';

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
        const cell1 = worksheet['A2']?.v || ''; // Default to empty string if undefined
        const cell2 = worksheet['B2']?.v || ''; // Default to empty string if undefined
        const seqId = `${cell1}${cell2}`;

        // Increment the cell's value (assumes the value is numeric)
        worksheet['B2'].v += 1;

        // Save the modified workbook
        xlsx.writeFile(workbook, filePath);

        return seqId; // Return the value

    } catch (error) 
        {
            console.error('Error reading Excel file:', error.message);
            return undefined;
        }
}
