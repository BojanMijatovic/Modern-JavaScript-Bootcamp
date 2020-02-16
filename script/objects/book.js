
const myBook = {
  name: '1984',
  author: 'Orwell',
  pageCount: 325
}

// console.log(`My book is ${myBook.name} from ${myBook.author}`);

const newBook = {
  name: 'White Wolf',
  pageCount: 420,
  author: 'Sapkowski'
}


const person = {
  name: 'John',
  age: 32,
  city: 'Novi Sad'
}

// console.log(`${person.name} lives in ${person.city} and have ${person.age} age`);

person.age = person.age + 1;

// console.log(`${person.name} lives in ${person.city} and have ${person.age} age`);


//  Functions with Object
let readBook = function (book) {
  return console.log(`Read ${book.name} from ${book.author}`);
}

// readBook(myBook);
// readBook(newBook);

//  Return obj from functions

let calcTemp = function (cel) {
  return {
    celsius: `In celsius is ${cel} degrease`,
    fahrenheit: `in fahrenheit is ${(cel - 32) / 1.8} degrease`,
    kelvin: `In kelvin is ${(cel + 459.67) * 5 / 9} degrease`
  }
}

// let celsius = calcTemp(60);
// console.log(celsius.celsius);

// let fahrenheit = calcTemp(60);
// console.log(celsius.fahrenheit);

// let kelvin = calcTemp(60);
// console.log(celsius.kelvin);



//  Account obj 
//  expenses tracker
const account = {
  name: 'John',
  income: 0,
  expenses: 0
}

//  add income 
let addIncome = function (acc, amount) {
  return acc.income = acc.income + amount;
}

//  add expenses
let addExpenses = function (acc, amount) {
  return acc.expenses = acc.expenses + amount;
}

//  Total summary
let totalSum = function (acc) {
  let total = acc.income = acc.income - acc.expenses;
  return `${acc.name} have ${total}$ total  from ${acc.income}$ income  and ${acc.expenses}$ off expenses`;
}

//  reset 
let reset = function (acc) {
  acc.income = 0;
  acc.expenses = 0;
}

// let add = addIncome(account, 10);
// let exp = addExpenses(account, 2);
// let resetAccount = reset(account);
// let a = addIncome(account, 40);
// let b = addIncome(account, 10);
// exp = addExpenses(account, 2);
// let total = totalSum(account);
// console.log(add);
// console.log(exp);

// console.log(total);

  // Is valid Password function

// let isValidPass = function (str) {
//   if (str.includes('password') || str.length <= 8) {
//     return `Please provide stronger password`
//   } return `Welcome`
// }

// let a = isValidPass('dpasswo1rddasdaas');
// console.log(a);
