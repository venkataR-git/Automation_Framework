import {test, expect} from '@playwright/test'
//import fs from 'fs'
//import path from 'path'

//Method 1
const data = JSON.parse(JSON.stringify(require('../testdata/testdata.json')))

//Method 2
// const filePath = '../testdata/testdata.json'
// const rawData = fs.readFileSync(filePath)
// const jsonData = JSON.parse(rawData)

test("Read data from JSON", async({page})=>{

//Method 1
    console.log(data.url)
    console.log(data.username)
    console.log(data.password)

//console.log(path.resolve('../testdata/testdata.json'))

//Method 2
    // console.log(`${jsonData.url}`)
    // console.log(`${jsonData.username}`)
    // console.log(`${jsonData.password}`)

})

