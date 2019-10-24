import {format} from './statement'

export const tragedy = (name) => ({
  statement: tradedyStatement(name)
})

const tradedyStatement = name => (audience) => {
  let amount = 0;
  let volumeCredits = 0;
  amount = 40000;
  if (audience > 30) {
      amount += 1000 * (audience - 30);
  }
  volumeCredits += Math.max(audience - 30, 0);
  return {
    statement: ` ${name}: ${format(amount/100)} (${audience} seats)\n`,
    amount,
    volumeCredits,
  }
}