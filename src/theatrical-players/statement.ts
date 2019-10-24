export const statement = (invoice) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for(let performance of invoice.performances) {
      const currentStatement = performanceStatement(performance)
      result += currentStatement.statement
      totalAmount += currentStatement.amount
      volumeCredits += currentStatement.volumeCredits
  }
  result += `Amount owed is ${format(totalAmount/100)}\n`
  result += `You earned ${volumeCredits} credits\n`
  return result;
}

export const format = new Intl.NumberFormat("en-US", {
  style: "currency", 
  currency: "USD", 
  minimumFractionDigits: 2
}).format;

const performanceStatement = ({playName, basePrice, volumeCreditsRatio, audience: {total, premium, overflow, overflowPremium, overflowPenalty}}) => {
  let amount = basePrice + overflowPenalty + overflowPremium * overflow + premium * total;
  let volumeCredits = 0;
  volumeCredits += Math.floor(total - 30) + Math.floor(total * volumeCreditsRatio);
  return {
    statement: ` ${playName}: ${format(amount/100)} (${total} seats)\n`,
    amount: amount,
    volumeCredits: volumeCredits,
  }
}

