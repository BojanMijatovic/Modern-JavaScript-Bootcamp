const nums = [10, 23, 4, 5, 6, 7, 8, 11, 2, 3,];
const names = ['John', 'Ford', 'Terry', 'Alex', 'Rodney', 'Doe'];

const books = [
  {
    name: 'Tesla',
    author: 'Anonymous',
    rating: 4.2
  }, {
    name: 'LOTR',
    author: 'John',
    rating: 3.8
  }, {
    name: 'Witcher',
    author: 'Alex',
    rating: 4.7
  }, {
    name: 'Farm',
    author: 'Orwell',
    rating: 3
  }
]


// nums.forEach(function (num) {
//   console.log(num);
// });


//  Map callback function
const double = nums.map(function (num) {
  return num * 2;
})
// console.log(double);

//  Coll return
const upNames = names.map(function (word) {
  return word.toUpperCase().split('').join('-');
})

// console.log(upNames);

//  Map and return obj
const numDetails = nums.map(function (num, i) {
  if (num % 2 == 0) {
    return {
      title: `${i} isOdd`,
      num: num
    }
  } else {
    return {
      title: `${i} isEven`,
      num: num
    }
  }
})
// console.log(numDetails);

// //  For Each Function
// books.forEach(function (book) {
//   console.log(`There is a book ${book.name}`);
// })

//  New array off authors off books 
// const authors = books.map(function (book) {
//   return book.author;
// })

// console.log(authors);



//  Arrow functions
const addNum = (x) => {
  return x + x;
}
// console.log(addNum(3));

const divide = (x, y) => {
  return x / y;
}
// console.log(divide(10, 5));


//  One paramter
const test = x => {
  return x * 3;
}
// console.log(test(4));

const newNums = nums.map(num => num * 2);
// console.log(newNums);

//  Single line
const testNum = nums.map(n => n % 2 === 0 ? `Num ${n} is even` : `Num ${n} is odd`);
// console.log(testNum);

// const sortRating = books.map(book => `Book ${book.name} have rating ${book.rating}`);
// console.log(sortRating);


const todos = ['Learn Js', 'Work', 'Eat', 'Sleep', 'Code', 'More code'];

const notes = ['Note 1', 'Note 2', 'Note 3', 'Work in Node', 'Work in React'];

// notes.forEach((note, i) => {
//   return console.log(`${i} ${note}`);
// });

// todos.forEach((todo, i) => {
//   return console.log(`${i + 1} ${todo}`);
// }
// )

//  For Loop
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1} ${todos[i]}`);
// }


// Reverse with for loop
// for (let i = todos.length - 1; i >= 0; i--) {
//   console.log(` ${i} ${todos[i]}`);
// }

//  Find array
const movies = [{
  name: 'Mrs. Agent',
  rang: 8
},
{
  name: 'Mr.007',
  rang: 7.1
}, {
  name: 'Mr.Doctor',
  rang: 9
}, {
  name: 'Mrs. Arc',
  rang: 7.7
}, {
  name: 'Tesla',
  rang: 9.4
}, {
  name: 'Lambs',
  rang: 9.1
}, {
  name: 'Fox',
  rang: 8.2
}, {
  name: 'Poem',
  rang: 7.9
}]


// const findName = names.find(name => {
//   return name.includes('Doe');
// })
// console.log(findName);

// const rangMovie = movies.find(movie => {
//   return movie.rang > 9;
// })
// console.log(rangMovie);


const randomNums = [3, 44, 56, 78, 1, 33, 2111, 8, 99,];

// const filterNums = randomNums.filter(num => num % 2 === 0);

// console.log(filterNums);

const rangMovie = movies.filter(movie => {
  return movie.rang >= 8;
})

// console.log(rangMovie);


//  Find by name Movie
const movieName = 'MRS';

const findMovie = movies.filter(movie => {
  const title = movie.name.toLowerCase();
  return title.includes(movieName.toLowerCase());
})

// console.log(findMovie);


const oddBigNums = randomNums.filter(num => num % 2 === 1 && num >= 100);
console.log(oddBigNums);

// const filterNum = oddBigNums.filter(num => num >= 100);
// console.log(filterNum);


//  Find Name 
const name1 = 'DOE';

const findName = names.filter(name => {
  return name.toLowerCase().includes(name1.toLowerCase());
})

console.log(findName);
