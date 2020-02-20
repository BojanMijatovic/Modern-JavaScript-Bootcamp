const nums = [10, 23, 4, 5, 6, 7, 8, 11, 2, 3,];

// nums.forEach(function (num) {
//   console.log(num);
// });


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

books.forEach(function (book) {
  console.log(`There is a book ${book.name}`);
})