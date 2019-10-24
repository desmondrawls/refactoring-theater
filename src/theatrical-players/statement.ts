export const statement = (invoice: any, plays: any) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for(let perf of invoice.performances) {
      const play = plays[perf.playID]
      const performanceStatement = play.statement(perf.audience)

      // print line for this order
      result += performanceStatement.statement
      totalAmount += performanceStatement.amount
      volumeCredits += performanceStatement.volumeCredits
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
