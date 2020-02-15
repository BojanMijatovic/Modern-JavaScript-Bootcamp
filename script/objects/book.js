
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

let celsius = calcTemp(60);
console.log(celsius.celsius);

let fahrenheit = calcTemp(60);
console.log(celsius.fahrenheit);

let kelvin = calcTemp(60);
console.log(celsius.kelvin);