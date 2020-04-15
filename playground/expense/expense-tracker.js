const account = {
  name: 'Alex',
  expenses: [],
  income: [],

  addExpenses(description, amount) {
    this.expenses.push({ 'description': description, 'amount': amount });
  },

  addIncome(description, amount) {
    this.income.push({ 'description': description, 'amount': amount })
  },

  getSummary() {
    let expenseTotal = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(expense => expenseTotal = expenseTotal + expense.amount);
    this.income.forEach(income => totalIncome = totalIncome + income.amount);

    accountBalance = totalIncome - expenseTotal;

    return `${this.name} had balance ${accountBalance}$  have ${expenseTotal}$ and the income is ${totalIncome}$`
  }
}

account.addExpenses('Coffee', 2);
account.addExpenses('Car', 350);
account.addExpenses('Rent', 200);
account.addIncome('Project', 400);
account.addIncome('upWork', 250);

console.log(account.getSummary());
