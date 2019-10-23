const fs = require('fs')
const util = require('util')
import { statement } from "./statement";

const main = async () => {
  try {
    const plays = await util.promisify(fs.readFile)(`${__dirname}/plays.json`) 
    const invoices = await util.promisify(fs.readFile)(`${__dirname}/invoices.json`) 
    console.log(statement(JSON.parse(invoices)[0], JSON.parse(plays)))
  } catch (error) {
    console.log('error: ', error)
  }
}

main()