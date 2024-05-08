import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars: (income) => `$${budget.income}`,
    getIncomeInEuros: (income) => `${budget.income} euros`,
  };
}
