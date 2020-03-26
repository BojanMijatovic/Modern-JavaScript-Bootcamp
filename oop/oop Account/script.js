
class Account {
  constructor(name, lastName, balance, income, id) {
    this.name = name;
    this.lastName = lastName;
    this.balance = balance;
    this.income = income;
    this.id = id;
  }
}

class Bank {

  accounts = [
    new Account('Max', 'Smith', 1110, 235, 787411),
    new Account('Alex', 'John', 481, 100, 12311),
    new Account('Tom', 'Andrew', 400, 35, 44171)
  ]


  showAccount() {
    for (const acc of this.accounts) {
      const accItem = document.createElement('li');
      accItem.innerHTML = `<p>${acc.name} ${acc.lastName} have ${acc.balance}\$ and income is ${acc.income}</p>`;
      document.getElementById('app').append(accItem);
    }
  }

  addIncome() {
    this.accounts.forEach((account) => {
      return console.log(`${account.name} have income off ${account.income + 100}\$`);
    }
    )
  }

  removeFromBalance() {
    this.accounts.forEach((account) => {
      return console.log(`Tax for account is 50\$ and We remove you from your balance is ${account.balance - 50}\$`);
    }
    )
  }
}

const addAccount = new Bank(new Account);
const add2 = new Bank(new Account);
add2.showAccount()

const addIncome = new Bank(new Account);
addIncome.addIncome();

const payTax = new Bank(new Account);
payTax.removeFromBalance();

console.log(add2);

