
const account = {
  name: 'John',
  expenses: []
}

const addExpenses = (description, amount) => {
  account.expenses.push({ description, amount });
}


addExpenses('Rent', 700);
addExpenses('Coffee', 10);
console.log(account);


console.log(test);
