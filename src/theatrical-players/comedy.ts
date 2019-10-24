import {format} from './statement'

export const comedy = (name) => ({
  statement: comedyStatement(name)
})

const comedyStatement = name => (audience) => {
  let amount = 0;
  let volumeCredits = 0;
  amount = 30000;
  if (audience > 20) {
      amount += 10000 + 500 * (audience - 20);
  }
  amount += 300 * audience;
  volumeCredits += Math.max(audience - 30, 0) + Math.floor(audience / 5);
  return {
    statement: ` ${name}: ${format(amount/100)} (${audience} seats)\n`,
    amount,
    volumeCredits,
  }
}