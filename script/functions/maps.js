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
