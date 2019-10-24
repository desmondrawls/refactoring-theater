const fs = require('fs')
const util = require('util')
import { statement } from "./statement";
import { playFactory } from './playFactory';
import { access } from "fs";

const main = async () => {
  try {
    const plays = await util.promisify(fs.readFile)(`${__dirname}/plays.json`) 
    const invoices = await util.promisify(fs.readFile)(`${__dirname}/invoices.json`)
    const parsedInvoices = JSON.parse(invoices)
    const parsedPlays = JSON.parse(plays)
    const processedPlays = Object.keys(parsedPlays).reduce((acc, key) => ({...acc, [key]: playFactory(parsedPlays[key])}), {})
    const currentStatement = statement(parsedInvoices[0], processedPlays)
    console.log(currentStatement.replace(/\s/g, ''))
    console.log(currentStatement.replace(/\s/g, '') === 'StatementforBigCoHamlet:$650.00(55seats)AsYouLikeIt:$580.00(35seats)Othello:$500.00(40seats)Amountowedis$1,730.00Youearned47credits')
  } catch (error) {
    console.log('error: ', error)
  }
}

main()