const fs = require('fs')
const util = require('util')
import { statement } from "./statement";

const main = async () => {
  try {
    const invoices = await util.promisify(fs.readFile)(`${__dirname}/invoices.json`)
    const parsedInvoice = JSON.parse(invoices)
    const currentStatement = statement(parsedInvoice)
    console.log(currentStatement.replace(/\s/g, ''))
    console.log(currentStatement.replace(/\s/g, '') === 'StatementforBigCoHamlet:$650.00(55seats)AsYouLikeIt:$580.00(35seats)Othello:$500.00(40seats)Amountowedis$1,730.00Youearned47credits')
  } catch (error) {
    console.log('error: ', error)
  }
}

main()