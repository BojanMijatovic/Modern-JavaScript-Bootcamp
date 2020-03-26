
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

  showAccount() {               //    show status on html
    for (const acc of this.accounts) {
      const accItem = document.createElement('li');
      accItem.innerHTML = `<p>${acc.name} ${acc.lastName} have ${acc.balance}\$ and income is ${acc.income} with ${acc.id}</p>`;
      document.getElementById('app').append(accItem);
    }
  }

  addIncome() {
    this.accounts.forEach((account) => {           // add income for all 
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

  addAccount() {
    this.accounts.push(new Account('Henry', 'Red', 887, 278, 45646));
    this.accounts.forEach(ac => console.log(`Now we have ${ac.name} i our bank`))
    this.changeId();
    this.showAccount();
  }

  removeAccount() {
    this.accounts.splice(1, 1);
    // console.log(this.accounts);
    this.addAccount();
  }

  changeId() {
    const newId = 1344000;
    this.accounts.forEach(acc => acc.id += newId);
  }
}

const add2 = new Bank(new Account);

const addIncome = new Bank(new Account);
addIncome.addIncome();

const payTax = new Bank(new Account);
payTax.removeFromBalance();

const removeAc = new Bank(new Account);
removeAc.removeAccount()

const newId = new Bank(new Account);
newId.changeId();