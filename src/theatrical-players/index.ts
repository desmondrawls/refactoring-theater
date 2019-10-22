const fs = require('fs')
import { statement } from "./statement";

const main = () => {
  fs.readFile(`${__dirname}/plays.json`, (err, data) => {
    if (err) {
        throw err;
    }
    const parsedPlays = JSON.parse(data)
    console.log('raw plays: ', parsedPlays);
    fs.readFile(`${__dirname}/invoices.json`, (err, data) => {
      if (err) {
          throw err;
      }
      const parsedInvoices = JSON.parse(data)
      console.log('raw invoices: ', parsedInvoices);
      console.log(statement(parsedInvoices[0], parsedPlays))
  });
})
}

main()