
const name = 'Doe';
const position = 'Tester';

const team = {
  name,
  position,
  login() {
    return `Welcome ${this.name}`
  }
}

// console.log(team.login());


// console.log(team);

const addExp = (obj, ex, y) => ({ ...obj, [ex]: y });

// console.log(addExp(team, 'experience', '3+ years'));

const math = {
  add: (x, y) => x + y,
  divide: (x, y) => x / y
}

// console.log(math.add(2, 3));
// console.log(math.divide(10, 2));

const person = {
  name: 'John',
  lastName: 'Doe',
  fullName() {
    return ` Welcome ${this.name} ${this.lastName}`
  },
  smile: () => `Laugh  with smile ${name.toUpperCase()}`
}

// console.log(person.fullName());
// console.log(person.smile());


//  Start simple app
const account = {
  items: [],
  addItems(item, amount) {
    this.items.push({ item: item, amount: amount })
  },
  removeItems() {
    return this.items.pop();
  }
}

account.addItems('coffee', 3);
account.addItems('Lap top', 1);
account.addItems('books', 10);
account.addItems('beer', 6);

account.removeItems();
console.log(account.items);



