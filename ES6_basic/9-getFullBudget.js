import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    getIncomeInDollars: (income) => `$${budget.income}`,
    getIncomeInEuros: (income) => `${budget.income} euros`,
  };
}
