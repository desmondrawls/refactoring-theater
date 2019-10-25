const fs = require('fs')
const util = require('util')
import { statement } from "./statement";
import { Play } from './plays';
import { tragedy } from './tragedy';
import { comedy } from './comedy';

const expectedStatement = 'StatementforBigCoHamlet:$650.00(55seats)AsYouLikeIt:$580.00(35seats)Othello:$500.00(40seats)Amountowedis$1,730.00Youearned47credits'

export const plays: {[type: string]: Play} = {
  tragedy,
  comedy
}

const main = async () => {
  try {
    const invoices = await util.promisify(fs.readFile)(`${__dirname}/invoices.json`)
    const parsedInvoice = JSON.parse(invoices)
    const currentStatement = statement(plays)(parsedInvoice)
    console.log(currentStatement.replace(/\s/g, ''))
    console.log(expectedStatement)
    console.log(currentStatement.replace(/\s/g, '') === expectedStatement)
  } catch (error) {
    console.log('error: ', error)
  }
}

main()