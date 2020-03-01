
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
  }
}

console.log(person.fullName());
