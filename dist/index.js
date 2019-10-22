"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const statement_1 = require("./statement");
const main = () => {
    fs.readFile(`${__dirname}/plays.json`, (err, data) => {
        if (err) {
            throw err;
        }
        const parsedPlays = JSON.parse(data);
        console.log('raw plays: ', parsedPlays);
        fs.readFile(`${__dirname}/invoices.json`, (err, data) => {
            if (err) {
                throw err;
            }
            const parsedInvoices = JSON.parse(data);
            console.log('raw invoices: ', parsedInvoices);
            console.log(statement_1.statement(parsedInvoices, parsedPlays));
        });
    });
};
main();
//# sourceMappingURL=index.js.map