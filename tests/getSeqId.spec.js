import {test, expect} from '@playwright/test'
import { getSeqId } from '../utils'

test("Get SeqId from Excel", async({page})=>{

// const filePath = 'testdata/testdata.xlsx'
// const sheetName = 'Sheet1';
//const cellAddress = 'B2';

const seqId = getSeqId()

console.log("Sequence ID: "+seqId)

})

