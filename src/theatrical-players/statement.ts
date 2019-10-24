export const statement = ({customer, performances}) => {
  const greeting = `Statement for ${customer}\n`;
  const total = performances.slice(1).reduce(addPerformance, performanceStatement(performances[0]))
  const damage = `Amount owed is ${format(total.amount/100)}\n`
  const salvage = `You earned ${total.volumeCredits} credits\n`
  return greeting + total.statement + damage + salvage;
}

const addPerformance = (performances, performance) => addMerge(performances, performanceStatement(performance))

const addMerge = (first, second) =>
  Object.keys(first).reduce((acc, next) => ({...acc, [next]: first[next] + second[next]}), {})

const performanceStatement = ({playName, basePrice, volumeCreditsRatio, audience: {total, premium, overflow, overflowPremium, overflowPenalty}}) => {
  const amount = basePrice + overflowPenalty + overflowPremium * overflow + premium * total
  const volumeCredits = Math.floor(total - 30) + Math.floor(total * volumeCreditsRatio)
  const statement = ` ${playName}: ${format(amount/100)} (${total} seats)\n`
  return { statement, amount, volumeCredits }
}

export const format = new Intl.NumberFormat("en-US", {
  style: "currency", 
  currency: "USD", 
  minimumFractionDigits: 2
}).format;

