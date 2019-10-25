import {Play} from './plays'

export const statement = (plays: {[type: string]: Play}) => ({customer, performances}) => {
  const greeting = `Statement for ${customer}\n`;
  const {amount, volumeCredits, statement} = performances.slice(1).reduce(addPerformance(plays), performanceStatement(plays)(performances[0]))
  const damage = `Amount owed is ${format(amount/100)}\n`
  const salvage = `You earned ${volumeCredits} credits\n`
  return greeting + statement + damage + salvage;
}

const addPerformance = (plays) => (performances, performance) => addMerge(performances, performanceStatement(plays)(performance))

const addMerge = (first, second) =>
  Object.keys(first).reduce((acc, next) => ({...acc, [next]: first[next] + second[next]}), {})

const performanceStatement = (plays) => ({playName, type, audience}) => {
  const {basePrice, volumeCreditsRatio, premium, overflowPenalty, overflowPremium, overflowLimit} = plays[type]
  const overflow = audience - overflowLimit
  const amount = basePrice + overflowPenalty + overflowPremium * overflow + premium * audience
  const volumeCredits = Math.floor(audience - 30) + Math.floor(audience * volumeCreditsRatio)
  const statement = ` ${playName}: ${format(amount/100)} (${audience} seats)\n`
  return { statement, amount, volumeCredits }
}

export const format = new Intl.NumberFormat("en-US", {
  style: "currency", 
  currency: "USD", 
  minimumFractionDigits: 2
}).format;

